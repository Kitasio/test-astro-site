<script>
    let count = 0;
</script>

<div class="flex gap-10">
    <button on:click={() => count--}>-</button>
    <pre>{ count }</pre>
    <button on:click={() => count++}>+</button>
</div>
