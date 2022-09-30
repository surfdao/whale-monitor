import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "MjQxNTk5NDYzODAwNTY5ODU2.GDl-TQ.fovLW94RxVlhfxdUBl4QutqOW5jqBQ5zvy2hdE"
);

gateway.on("message", (m) => {
  if (m.channel_id === "1019964422791372920") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      "https://discord.com/api/webhooks/1025111175203143781/Jfbyc4bNvjYnXE9Z4GDFbkEWKL_aLGXtKdoTFqypf-i3EHwS6n4nOKl4F2BJ9rvbYjMM",
      content
    );
  }
});