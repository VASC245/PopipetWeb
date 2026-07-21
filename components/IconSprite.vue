<template>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <defs>
      <symbol id="i-leaf" viewBox="0 0 24 24"><path d="M11 21C7 21 4 17.4 4 12.6 4 7 9 3.5 20 3c.4 11-3 18-9 18z"/><path d="M6.5 18.5C9 14 13 10 17.5 7.5"/></symbol>
      <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3l7 2.8v5.4c0 4.4-2.9 7.4-7 9-4.1-1.6-7-4.6-7-9V5.8L12 3z"/><path d="M9 12l2 2 4-4.5"/></symbol>
      <symbol id="i-coin" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v9M14.5 9.2c-.6-.7-1.5-1.1-2.5-1.1-1.5 0-2.6.8-2.6 2s1 1.7 2.6 1.9c1.7.2 2.7.9 2.7 2.1 0 1.3-1.2 2.1-2.7 2.1-1.1 0-2.1-.5-2.6-1.2"/></symbol>
      <symbol id="i-recycle" viewBox="0 0 24 24"><path d="M5.8 8.5L8 4.8c.5-.8 1.6-.8 2.1 0l1.7 3M14.5 5.5h4.2c.9 0 1.5 1 1 1.8l-2 3.4M20 15.5l-2 3.6c-.4.8-1.5.9-2.1.1l-1.9-3M9.5 18.6H5.4c-1 0-1.6-1-1.1-1.9l2-3.4"/></symbol>
      <symbol id="i-wind" viewBox="0 0 24 24"><path d="M3 8h9.5a2.5 2.5 0 10-2.3-3.5M3 12h14a2.5 2.5 0 11-2.3 3.5M3 16h7.5a2 2 0 11-1.9 2.8"/></symbol>
      <symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 20.5S4 15.3 4 9.9C4 7.2 6.1 5 8.8 5c1.3 0 2.5.6 3.2 1.6C12.7 5.6 14 5 15.2 5 17.9 5 20 7.2 20 9.9c0 5.4-8 10.6-8 10.6z"/></symbol>
      <symbol id="i-truck" viewBox="0 0 24 24"><path d="M3 6.5h11v10H3zM14 10h4l3 3v3.5h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></symbol>
      <symbol id="i-check" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></symbol>
      <symbol id="i-cart" viewBox="0 0 24 24"><path d="M4 5h2l2.2 10.5a1.5 1.5 0 001.5 1.2h7.6a1.5 1.5 0 001.5-1.2L20.5 8H7"/><circle cx="10" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></symbol>
      <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></symbol>
      <symbol id="i-x" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></symbol>
      <symbol id="i-chev" viewBox="0 0 24 24"><path d="M6 9.5l6 6 6-6"/></symbol>
      <symbol id="i-award" viewBox="0 0 24 24"><circle cx="12" cy="9" r="5.5"/><path d="M8.7 13.6L7.5 21l4.5-2.6L16.5 21l-1.2-7.4"/></symbol>
      <symbol id="i-flag" viewBox="0 0 24 24"><path d="M5 21V4"/><path d="M5 4.8c2.2-1.4 4.4-1.4 6.6 0s4.4 1.4 6.6 0v8.4c-2.2 1.4-4.4 1.4-6.6 0s-4.4-1.4-6.6 0"/></symbol>
      <symbol id="i-phone" viewBox="0 0 24 24"><path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 005.5 5.5l1.5-2 4 1.5v3a2 2 0 01-2.2 2A16.5 16.5 0 014.5 5.7a2 2 0 012-2.2z"/></symbol>
      <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-7-5.8-7-11a7 7 0 1114 0c0 5.2-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></symbol>
      <symbol id="i-box" viewBox="0 0 24 24"><path d="M3.5 7.5L12 3.5l8.5 4v9l-8.5 4-8.5-4v-9z"/><path d="M3.5 7.5L12 11.5l8.5-4M12 11.5V20.5"/></symbol>
      <symbol id="i-book" viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 016.5 3H20v15.5H6.5A2.5 2.5 0 004 21z"/><path d="M4 18.5A2.5 2.5 0 016.5 16H20M8 7.5h8M8 11h5"/></symbol>
      <symbol id="a-cat" viewBox="0 0 24 24"><path d="M6 9V4.5L9.2 7h5.6L18 4.5V9c.8 1.1 1.2 2.4 1.2 3.8 0 4.2-3.2 7-7.2 7s-7.2-2.8-7.2-7C4.8 11.4 5.2 10.1 6 9z"/><path d="M9.5 12.5h.01M14.5 12.5h.01M12 15v1M10.5 16.5c.9.7 2.1.7 3 0"/></symbol>
      <symbol id="a-rabbit" viewBox="0 0 24 24"><path d="M9 10.5C7.5 8 7 5 8.5 3.5 10 2 11.5 5 12 8M15 10.5c1.5-2.5 2-5.5.5-7C14 2 12.5 5 12 8"/><circle cx="12" cy="14.5" r="5.5"/><path d="M10 14h.01M14 14h.01M12 16v.8"/></symbol>
      <symbol id="a-hamster" viewBox="0 0 24 24"><circle cx="12" cy="13" r="6.5"/><circle cx="7" cy="7" r="1.8"/><circle cx="17" cy="7" r="1.8"/><path d="M10 13h.01M14 13h.01M11 15.5h2"/></symbol>
      <symbol id="a-turtle" viewBox="0 0 24 24"><path d="M6 13a6 5 0 0112 0v1H6v-1z"/><path d="M18 14c1.5 0 2.5-.8 2.5-2M6 14l-2 2.5M18 14l1.5 2.5M9 14v2.5M15 14v2.5M9 10.5l1.5 2M15 10.5l-1.5 2M12 8v5"/></symbol>
      <symbol id="a-lizard" viewBox="0 0 24 24"><path d="M4 15c3-1 4-4 7-4s4 2 7 2c1.5 0 2.5-.6 2.5-.6M4 15c0 2 1.5 3.5 3.5 3.5S11 17 11 15M4 15l-1.5-2M14 13.2c-.3 2.6 1 4.8 4 5.8M8 11.5L6.5 9"/></symbol>
      <symbol id="a-horse" viewBox="0 0 24 24"><path d="M5 20v-5c0-4 3-7.5 7.5-7.5H15L19.5 4l1 4.5-2 1.5c0 4.5-2.5 6-5.5 6.5M9 20v-3.5M15 20v-3.6"/></symbol>
      <symbol id="a-bird" viewBox="0 0 24 24"><path d="M16 8.5a4.5 4.5 0 00-9 .5v3C7 16.5 9.5 19 13 19h6.5l-2.5-3c1.5-1 2.5-2.8 2.5-5V9l-3.5-.5z"/><path d="M15.5 8h.01M7 11l-3 1.5 3 .5"/></symbol>
    </defs>
  </svg>
</template>
