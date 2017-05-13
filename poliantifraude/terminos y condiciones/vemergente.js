<button onclick="alert('hizo click');">Click me!</button><br><br>
<input onclick = "enable();"type="checkbox" name="active_field" id="toggle">Toggle to switch
<button id="status">Button</button>

<script>
      function enable() {
      if (document.getElementById('toggle').checked === true) {
      document.getElementById('status').disabled = true;
      }
      else 
     {
     document.getElementById('status').disabled = false;
     }
     }
</script>
