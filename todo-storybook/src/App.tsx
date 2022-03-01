import React from 'react';

import useInitTodoList from "./App.hook";

import Layout from "./_components/Layout/Layout";
import Header from "./_components/Header/Header";
import TodoList from "./_components/TodoList/TodoList";

function App() {
  useInitTodoList();

  return (
    <div className="App">
      <Layout>
          <Header />
          <TodoList />
      </Layout>
    </div>
  );
}

export default App;
