export default function RaylibGame() {
  return (
    <div style={{ width: "80vh", height: "80vh", border: "none" }}>
      <iframe
        src="/game.html"
        title="Raylib WebAssembly Game"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
}