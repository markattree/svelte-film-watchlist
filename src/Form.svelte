<script>
  import AutoComplete from "simple-svelte-autocomplete";

  const services = ["Netflix", "Amazon Prime", "Disney+", "Apple TV+"];

  let name;
  let service;

  let movies = [];

  function handleSubmit() {
    movies.push({
      name: name,
      service: service
    });
    movies = movies;
    name = '';
    service = '';
  }

  function clear() {
    name = '';
    service = '';
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-group">
    <div class="row">
      <div class="col-sm-4">
        <label for="name">Name:</label>
        <input
          id="name"
          data-cy="add-movie"
          bind:value={name}
          type="text"
          name="name"
          class="form-control"
        />
      </div>
      <div class="col-sm-4">
        <label for="name">Where to watch:</label>
        <AutoComplete
          items={services}
          bind:selectedItem={service}
          hideArrow="true"
          inputId="where-to-watch"
        />
      </div>
      <div class="col-sm-2 mt-auto">
        <button data-cy="submit" class="btn btn-primary" type="submit"
          >Submit</button
        >
      </div>
      <div class="col-sm-2 mt-auto">
        <button
          type="button"
          on:click={clear}
          data-cy="clear"
          class="btn btn-danger">Clear</button
        >
      </div>
    </div>
  </div>
</form>

<div class="row">
  <div class="col-sm-12">
    <ul data-cy="watchlist">
      {#each movies as movie}
        <li>{movie.name} - {movie.service}</li>
      {/each}
    </ul>
  </div>
</div>

<style>
  input {
    width: 100%;
  }

  .btn {
    width: 100%;
  }
</style>
