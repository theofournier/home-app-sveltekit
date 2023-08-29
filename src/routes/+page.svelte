<script lang="ts">
  import "./app.css";
  export let data;
</script>

<div class="app" style="background-image: url({data.image.urls.full})">
  <div class="bottom-container">
    <div class="content-container">
      <div class="title-container">
        <span class="text location">{data.image.location.name ?? ""}</span>
        <span class="text unsplash">
          Photo by
          <a
            href={`https://unsplash.com/@${data.image.user.username}?utm_source=home-app-theofournier&utm_medium=referral`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.image.user.name}
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
      <!-- <div class="date-container">
        <span class="text clock" onClick={getRandomImage}>
          {datetime.toLocaleTimeString()}
        </span>
        <span
          class="text date"
          onClick={() => {
            if (index === 0 || isLoading) return;
            setIndex(index - 1);
          }}
        >
          {datetime.toLocaleDateString()}
        </span> -->
    </div>
  </div>
</div>
