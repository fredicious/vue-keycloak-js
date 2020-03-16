<template>
  <div>
    <h1>This is a secret about page. You should only be able to see this if you are authenticated.</h1>
    <h3>This is what my token looks like:</h3>
    <label>tokenParsed</label><code>{{ $keycloak.tokenParsed }}</code>
    <br/>
    <label>idTokenParsed</label><code>{{ $keycloak.idTokenParsed }}</code>
    <br/>
    <!-- <label>Authorization</label><code>{{ $test }}</code> -->
    <br/>
  </div>
</template>
