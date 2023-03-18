import type { Component } from 'solid-js';
import logo from './logo.svg';
import styles from './App.module.css';
import { QueryClient, QueryClientProvider, createQuery } from '@tanstack/solid-query'

const queryClient = new QueryClient()

const App: Component = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div class={styles.App}>
        <header class={styles.header}>
          <img src={logo} class={styles.logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            // class={styles.link}
            class="text-3xl font-bold underline"
            href="https://github.com/solidjs/solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Solid
          </a>
        </header>
      </div>
    </QueryClientProvider>
  );
};

export default App;
