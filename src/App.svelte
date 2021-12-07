<script>
  import Navbar from './Navbar.svelte'
  import Sidebar from './Sidebar.svelte'
  import Table from './Table.svelte'

</script>

<main class="flex">
    <!-- <Navbar /> -->
    <div class="flex-grow flex-shrink">
      <Sidebar />
    </div>
    <div class="flex-grow flex-shrink w-full">
      <Table />
    </div>
</main>

<style>
  /* :global(body) {
      margin: 0;
      padding: 0;
    } */
	/* main {
		display: grid;
		grid-template:
			"nav content" min-content
	} */
	/* .content {
		grid-area: content;
	} */
</style>