<script lang="ts">
  import "./app.css";
  import { enhance } from "$app/forms";
  export let data;

  let date = new Date();

  setInterval(() => {
    date = new Date();
  }, 1000);
</script>

<div class="app" style="background-image: url({data.imageUrl})">
  <div class="bottom-container">
    <div class="content-container">
      <div class="title-container">
        <span class="text location">{data.locationName ?? ""}</span>
        <span class="text unsplash">
          Photo by
          <a
            href={`https://unsplash.com/@${data.username}?utm_source=home-app-theofournier&utm_medium=referral`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.usernameFull}
          </a>
          on
          <a
            href="https://unsplash.com/?utm_source=home-app-theofournier&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>
        </span>
      </div>
      <form method="POST" use:enhance>
        <label>
          <input type="submit" hidden />
          <div class="date-container">
            <span class="text clock">
              {date.toLocaleTimeString()}
            </span>
            <span class="text date">
              {date.toLocaleDateString()}
            </span>
          </div></label
        >
      </form>
    </div>
  </div>
</div>
