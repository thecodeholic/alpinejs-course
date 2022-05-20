document.addEventListener("alpine:init", () => {
  Alpine.data("dropdown", () => ({
    open: false,
    message: "Something",

    toggle() {
      this.open = !this.open;
    },
  }));

  Alpine.store("currentUser", {
    username: 'TheCodeholic',
    posts: ['Post1', 'Post2'],
  });
});
