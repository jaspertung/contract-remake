<script>
  import Navbar from './Navbar.svelte'
  import Sidebar from './Sidebar.svelte'
  import Table from './Table.svelte'

</script>

<div class="grid grid-cols-12 overflow-hidden">
  <div class="col-span-12">
    <Navbar />
  </div>
  <div class="col-span-12">
    <div class="flex">
      <div>
        <Sidebar />
      </div>
      <div class="flex-auto px-7">
        <Table />
      </div>
    </div>
  </div>
</div>



<style>

</style>