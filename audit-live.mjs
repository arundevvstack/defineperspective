const url = 'https://defineperspective.in/_next/image?url=https%3A%2F%2Fbdvhkvftsaxgrxiemdsg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcase-study-assets%2Fwestvogue-magazine%2Fgallery%2F1780674885769-60fd5m.png&w=1080&q=75';

async function audit() {
  try {
    console.log('Fetching:', url);
    const res = await fetch(url);
    console.log('Status:', res.status, res.statusText);
    console.log('x-vercel-id:', res.headers.get('x-vercel-id'));
    const text = await res.text();
    console.log('Body:', text);
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

audit();
