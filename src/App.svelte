<script>
  import Navbar from './Navbar.svelte'
  import Sidebar from './Sidebar.svelte'
  import Table from './Table.svelte'

</script>

<main>
  <div class="container">
    <div class="flex">
      <!-- <Navbar /> -->
      <div>
        <Sidebar />
      </div>
      <div>
        <Table />
      </div>
    </div>
  </div>
</main>

<style>
  :global(body) {
      margin: 0;
      padding: 0;
    }
	main {
		display: grid;
		grid-template:
			"nav content" min-content
	}
	.content {
		grid-area: content;
	}
</style>