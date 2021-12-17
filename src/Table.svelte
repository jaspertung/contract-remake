<div class="w-full">
  <table class="table table-compact table-fixed w-full">
    <thead class="invisible">
      <tr>
        <th class="w-1/4">Account name</th>
        <th class="w-1/4">Account number</th>
        <th class="w-1/4">Fee schedule</th>
        <th class="w-1/4">Date</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover group">
        <td>
          <!-- <div>
            <label for="my-modal-2" class="btn btn-primary modal-button">open modal</label>
            <input type="checkbox" id="my-modal-2" class="modal-toggle hidden"> 
            <div class="modal">
              <div class="modal-box">
                <p>Enim dolorem dolorum omnis atque necessitatibus.</p> 
                <div class="modal-action">
                  <label for="my-modal-2" class="btn btn-primary">Accept</label> 
                  <label for="my-modal-2" class="btn">Close</label>
                </div>
              </div>
            </div>
          </div> -->
          <!-- contract modal -->
          <a href="/components/modal#my-modal">modal </a>
          <div id="my-modal" class="modal">
            <div class="modal-box">
              <p>Enim dolorem dolorum omnis atque necessitatibus.</p>
              <div class="modal-action">
                <a href="/components/modal#" class="btn btn-primary">Accept</a>
                <a href="/components/modal#" class="btn">Close</a>
              </div>
            </div>
          </div>
          <!-- account name -->
          <div class="relative hover-trigger">
            <span>Cy Person</span>
            <!-- account info card -->
            <div
              class="card text-center shadow-2xl lg:card-side bg-accent text-accent-content absolute hover-target z-50"
            >
              <div class="card-body">
                <div class="form-control grid ">
                  <label class="label" for="custodian">
                    <span class="label-text">Custodian</span>
                  </label>
                  <input
                    type="text"
                    placeholder="IPX"
                    disabled="disabled"
                    class="input input-bordered"
                  />
                  <label class="label" for="account-number">
                    <span class="label-text">Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="8934723"
                    disabled="disabled"
                    class="input input-bordered"
                  />
                  <label class="label" for="account-name">
                    <span class="label-text">Account Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Cy Person"
                    disabled="disabled"
                    class="input input-bordered"
                  />
                  <label class="label" for="household">
                    <span class="label-text">Household</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Cy Person"
                    disabled="disabled"
                    class="input input-bordered"
                  />
                </div>
                <div class="justify-center card-actions">
                  <button class="btn btn-accent">Delete</button>
                  <button class="btn btn-accent">Save</button>
                </div>
              </div>
            </div>
          </div>
        </td>
        <!-- account number -->
        <td>
          <div class="flex flex-col">
            <span>12345678</span>
            <span>12345678</span>
          </div>
        </td>
        <!-- fee schedule -->
        <td>
          <div class="flex flex-col">
            <span>Standard</span>
            <span>No Bill</span>
          </div>
        </td>
        <!-- date -->
        <td class="text-right">
          <span class="group-hover:hidden">Dec 16</span>
          <!-- hover icons -->
          <div class="hidden group-hover:block">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 mr-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
        </td>
      </tr>

      <tr class="hover group">
        <td>
          <div class="relative hover-trigger">
            <span>Cy Human</span>
            <div
              class="card text-center shadow-2xl lg:card-side bg-accent text-accent-content absolute hover-target"
            >
              <div class="card-body">
                <p>
                  Rerum reiciendis beatae tenetur excepturi aut pariatur est
                  eos.
                </p>
                <div class="justify-center card-actions">
                  <button class="btn btn-accent">Start now</button>
                  <button class="btn btn-accent">More info</button>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>12345678</td>
        <td>Zemlak, Daniel and Leannon</td>
        <td class="text-right">
          <span class="group-hover:hidden">Dec 16</span>
          <div class="hidden group-hover:block">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 mr-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
        </td>
      </tr>

      <tr class=" hover group">
        <td>Brice Swyre</td>
        <td>12345678</td>
        <td>Carroll Group</td>
        <td class="text-right">
          <span class="group-hover:hidden">Dec 16</span>
          <span class="hidden group-hover:block">hello</span>
        </td>
      </tr>
      <tr class="hover">
        <td>Marjy Ferencz</td>
        <td>12345678</td>
        <td>Rowe-Schoen</td>
        <td class="text-right">3/25/2021</td>
      </tr>
      <tr class="hover">
        <td>Yancy Tear</td>
        <td>12345678</td>
        <td>Wyman-Ledner</td>
        <td class="text-right">5/22/2020</td>
      </tr>
      <tr class="hover">
        <td>Irma Vasilik</td>
        <td>12345678</td>
        <td>Wiza, Bins and Emard</td>
        <td class="text-right">12/8/2020</td>
      </tr>
      <tr class="hover">
        <td>Meghann Durtnal</td>
        <td>12345678</td>
        <td>Schuster-Schimmel</td>
        <td class="text-right">2/17/2021</td>
      </tr>
      <tr class="hover">
        <td>Sammy Seston</td>
        <td>12345678</td>
        <td>12345678</td>
        <td class="text-right">5/23/2020</td>
      </tr>
      <tr class="hover">
        <td>Lesya Tinham</td>
        <td>12345678</td>
        <td>Turner-Kuhlman</td>
        <td class="text-right">2/21/2021</td>
      </tr>
      <tr class="hover">
        <td>Zaneta Tewkesbury</td>
        <td>12345678</td>
        <td>Sauer LLC</td>
        <td class="text-right">6/23/2020</td>
      </tr>
      <tr class="hover">
        <td>Andy Tipple</td>
        <td>12345678</td>
        <td>Hilpert Group</td>
        <td class="text-right">7/9/2020</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  .hover-trigger .hover-target {
    display: none;
  }
  .hover-trigger:hover .hover-target {
    display: block;
  }
</style>
