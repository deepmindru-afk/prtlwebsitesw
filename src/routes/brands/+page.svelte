<script>
  export let url = "https://research.portalos.online/"; // Change this to the desired URL
</script>


<style>
  iframe {
    width: 100%;
    height: 100vh; /* Full viewport height */
    border: none;
  }

  .iframe-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden; /* Prevent overflow */
  }
</style>

<div class="iframe-container">
  <iframe src={url} title="search" allow="camera;microphone"></iframe>
</div>
