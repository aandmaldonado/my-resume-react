"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#f8fafc' }}>
        <h2 style={{ color: '#1e293b', fontSize: '2rem', marginBottom: '1rem' }}>¡Algo salió mal!</h2>
        <pre style={{ color: '#334155', background: '#e2e8f0', padding: '1rem', borderRadius: '8px', maxWidth: '90vw', overflowX: 'auto' }}>{error.message}</pre>
        <button
          onClick={() => reset()}
          style={{ marginTop: '2rem', padding: '0.75rem 2rem', background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Intentar de nuevo
        </button>
      </body>
    </html>
  );
} 