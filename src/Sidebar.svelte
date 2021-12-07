<script>
  let expanded = false

  const toggleExpanded =
(    /** @type {any} */ _) => expanded = !expanded
</script>

<nav class:expanded class="flex min-h-screen sticky">
  <button class="btn btn-square btn-ghost absolute cursor-pointer" on:click={toggleExpanded}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
  <ul class="menu w-60 border-r bg-base-100 essential">
    <!-- <li class="menu-title">
      <span>
        Menu Title
      </span>
    </li> -->
    <li>
      <a href="/">
        <div data-tip="hello" class="tooltip tooltip-right">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            class="inline-block w-5 h-5 mr-2 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
            </path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
            </path>
          </svg>
        </div>
        <span>
          Item with icon
        </span>
      </a>
    </li>
    <li>
      <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          class="inline-block w-5 h-5 mr-2 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
        <span>
          Item with icon
        </span>
      </a>
    </li>
    <li>
      <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          class="inline-block w-5 h-5 mr-2 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
        </svg>
        <span>
          Item with icon
        </span>
      </a>
    </li>
  </ul>
</nav>

<style>
  nav {
    /* grid-area: nav; */
    height: 100vw;
    transition: ease-out 200ms;
    width: 60px;
    overflow: hidden;
  }

  .expanded {
    transition: ease-out 200ms;
    width: 180px;
  }

  ul {
    list-style: none;
    padding: 0px;
    padding-top: 50px;
    margin: 0;
  }

  li {
    width: 200px;
  }

  .essential li > a > span,
  .non-essential {
    transition: opacity 200ms ease-out, visibility 0ms 200ms;
    opacity: 0;
    visibility: hidden;
  }

  .expanded .essential li > a > span,
  .expanded .non-essential {
    transition: opacity 200ms ease-out 100ms;
    opacity: 1;
    visibility: visible;
  }
</style>