<script>
    import gitHub from '../../assets/github.svg';
</script>


<nav class="py-6 px-12 flex items-center justify-between border-b-2 border-yellow-300">
    <h1 class="text-3xl font-bold text-green-400">Rick and Morty Web</h1>

    <section class="flex items-center space-x-5">
      <a href="https://github.com/laindomJS" target="_blank">
        <img class="w-12 h-12" src={gitHub} alt="Github icon">
     </a>
        <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" id="default-toggle" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-base font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
          </label> 
    </section>
</nav>