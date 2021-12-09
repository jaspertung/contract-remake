<script>
  import Navbar from './Navbar.svelte'
  import Sidebar from './Sidebar.svelte'
  import Table from './Table.svelte'

</script>

<!-- <main class="flex">
    
    <div class="flex-grow flex-shrink">
      
    </div>
    <div class="flex-grow flex-shrink w-full">
      
    </div>
</main> -->

<div class="grid grid-cols-12 overflow-hidden">
  <div class="col-span-12">
    <Navbar />
  </div>
  <div class="col-span-2">
    <Sidebar />
  </div>
  <div class="col-span-10">
    <Table />
  </div>
</div>


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