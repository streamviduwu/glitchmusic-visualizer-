const ad =
  `<a href="https://www.glitchmusic.site">
    <div style="color: white; display: flex; align-items: center; padding: 10px">
      <img height=50 src="https://visualizer.glitchmusic.site/watermark-banner-powered.png" alt="glitchmusic.site">
    </div>
  </a>`;

window.onload = function() {
  const elemDiv = document.createElement('div');
  elemDiv.innerHTML = ad;
  const gradient = `background: linear-gradient(45deg, rgba(66,220,236,0.85) 0%, rgba(30,163,227,0.85) 100%);`;
  elemDiv.style.cssText = `position:fixed;bottom:75px;width:210px;height:65px;border-radius: 0px 10px 10px 0px;z-index:9999;${gradient}`;
  document.body.insertBefore(elemDiv, document.body.firstChild);
};
