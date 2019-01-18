<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <router-link to="/portfolio" class="nav-link" activeClass="active">Portfolio</router-link>
        <router-link to="/stocks" class="nav-link" activeClass="active">Stocks</router-link>
      </ul>
      <!-- Right -->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Load and Save</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Load</a>
            <a class="dropdown-item" href="#">Save</a>
          </div>
        </li>
        <li class="nav-item">
          <span class="navbar-text">
            Funds: R$ 0.000,00
          </span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

