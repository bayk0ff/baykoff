<template>
  <div class="todo_container">
    <div class="todo_wrap">
      <div class="title_wrap">
        <p class="title">ToDo List</p>
      </div>
      <form class="create_wrap">
        <input v-model="creatingToDo" class="create_input" type="text" />
        <select name="priority" v-model="selectedPriority">
          <option v-for="priority in priorities" v-bind:value="priority">{{ priority }}</option>
        </select>
        <button class="create_button" @click.prevent="handleSendToDo(creatingToDo, selectedPriority)">
          Завести задачу
        </button>
      </form>
      <div class="priority">
        <input v-model="filter" class="create_input" type="text" />
        <select name="priority" v-model="filterPriority">
          <option v-bind:value="''" selected>Все</option>
          <option v-for="priority in priorities" v-bind:value="priority">{{ priority }}</option>
        </select>
      </div>
      <div class="task_list_wrap">
        <div v-for="(todoItem, index) in filteredList" :key="index" class="todo_list_element">
          <div class="element_content">
            <input v-model="todoItem.status" type="checkbox" />
            <p v-if="!todoItem.isEditing">{{ todoItem.name }}</p>
            <input v-else ref="editingInput" :value="todoItem.name" :index="index" type="text" />
          </div>
          <div v-if="!todoItem.isEditing" class="element_buttons">
            <button @click.prevent="handleEditToDo(todoItem)">
              Редактировать
            </button>
            <button @click.prevent="handleDeleteToDo(todoItem)">Удалить</button>
          </div>
          <div v-else class="element_buttons">
            <button @click.prevent="handleSaveEdited(todoItem)">
              Сохранить
            </button>
            <button @click.prevent="handleStopEdit(todoItem)">Отменить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const creatingToDo = ref("");

const editingInput = ref();

const selectedPriority = ref('LOW');

const priorities = ['LOW', 'HIGH'];

const filter = ref("");

const filterPriority = ref("");

const filteredList = computed(() => {
  return todoList.value.filter((todo) => todo.name.toLowerCase().startsWith(filter.value.toLowerCase()) && (filterPriority.value == "" || todo.priority == filterPriority.value)
  )
})

const handleSendToDo = (creatingToDo: string, priority: string) => {
  todoList.value.push({ status: false, name: creatingToDo, isEditing: false, priority: priority });
  alert("Задача " + creatingToDo + " создана с приоритетом " + priority)
};

const handleDeleteToDo = (todoItem: IToDoItem) => {
  let todoToDeleteIndex = todoList.value.indexOf(todoItem);
  let toDelete = confirm("Вы действительно хотите удалить задачу " + todoItem.name + " с приоритетом " + todoItem.priority);

  if (toDelete && todoToDeleteIndex !== -1) {
    todoList.value.splice(todoToDeleteIndex, 1);
    
  }
};

const handleEditToDo = (todoItem: IToDoItem) => {
  let todoToEditIndex = todoList.value.indexOf(todoItem);
  todoList.value[todoToEditIndex].isEditing = true;
};

const handleStopEdit = (todoItem: IToDoItem) => {
  let todoEditingIndex = todoList.value.indexOf(todoItem);
  todoList.value[todoEditingIndex].isEditing = false;
};

const handleSaveEdited = (todoItem: IToDoItem) => {
  let todoToSaveIndex = todoList.value.indexOf(todoItem);
  todoList.value[todoToSaveIndex].name = editingInput.value.find(
    (input) => +input.attributes.index.value === todoToSaveIndex
  ).value;
  todoList.value[todoToSaveIndex].isEditing = false;
};

interface IToDoItem {
  status: boolean;
  name: string;
  isEditing: boolean;
  priority: string;
}

const todoList = ref<IToDoItem[]>([

]);
</script>

<style lang="scss" scoped>
.todo_container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .todo_wrap {
    width: 500px;
    height: 800px;
    border: 1px black solid;
    padding: 0 20px;
    background-color: #242424;

    .title {
      color: rgb(255, 255, 255);
      font-size: 24px;
      font-weight: 700;
    }

    .create_wrap {
      display: flex;
      align-items: center;
      gap: 10px;

      .create_input {
        height: 24px;
      }

      .create_button {
        padding: 4px 8px;
      }
    }

    .task_list_wrap {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .todo_list_element {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background-color: #6d6d6d;
        border-radius: 10px;
        padding: 0 10px;

        .element_content {
          display: flex;
          align-items: center;
          gap: 10px;

          p {
            margin: 6px 0;
          }
        }

        .element_buttons {
          display: flex;
          align-items: center;
          gap: 10px;

          button {
            padding: 3px 6px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
