const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1.5,
    dx: (Math.random() - 0.5) * 1.5,
    dy: (Math.random() - 0.5) * 1.5,
    glow: Math.random() < 0.2,
    glowPhase: Math.random() * Math.PI * 2,
    glowSpeed: Math.random() * 0.05 + 0.02
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    let radius = p.radius;
    let alpha = 0.6;

    if (p.glow) {
      radius += Math.abs(Math.sin(p.glowPhase)) * 3;
      alpha = 0.5 + Math.abs(Math.sin(p.glowPhase)) * 0.5;
      p.glowPhase += p.glowSpeed;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,0,0,${alpha})`;
    ctx.shadowBlur = p.glow ? 20 : 5;
    ctx.shadowColor = '#ff0000';
    ctx.fill();
    ctx.shadowBlur = 0;
  });

  requestAnimationFrame(animate);
}

animate();
