const url = 'https://defineperspective.in/_next/image?url=https%3A%2F%2Fbdvhkvftsaxgrxiemdsg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcase-study-assets%2Fwestvogue-magazine%2Fgallery%2F1780674885769-60fd5m.png&w=1080&q=75';

async function verify() {
  for (let i = 0; i < 20; i++) {
    try {
      console.log(`[Attempt ${i+1}] Checking Vercel deployment...`);
      const res = await fetch(url, { method: 'HEAD' });
      if (res.status === 200) {
        console.log('SUCCESS! Production returned HTTP 200!');
        return;
      }
      console.log(`Status: ${res.status}`);
    } catch (err) {
      console.log('Error:', err.message);
    }
    await new Promise(r => setTimeout(r, 5000));
  }
  console.log('FAIL: Did not get 200 after 100 seconds.');
}

verify();
