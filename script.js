const WHATSAPP = "2349134435650";
const labels = {
home: "ROOTED IN NSUKKA • CRAFTED IN LUXURY",
menu: "SIGNATURE MENU • CURATED SELECTION",
reserve: "RESERVATION • INSTANT CONFIRMATION",
contact: "VISIT US • GRA NSUKKA"
};
function switchPage(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.querySelector(`.nav-item[data-page="${page}"]`).classList.add('active');
  document.getElementById('topLabel').innerText = labels[page];
  window.scrollTo({top:0, behavior:'smooth'});
}
function orderWhatsApp(item){
  const msg = `Hello TERRA Nsukka,%0A%0AI want to order:%0A${encodeURIComponent(item)}%0A%0APlease confirm availability & delivery.`;
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
}
function confirmReserve(){
  const name = document.getElementById('cname').value.trim();
  if(!name){alert('Please enter your full name'); document.getElementById('cname').focus(); return;}
  const phone = document.getElementById('cphone').value.trim();
  if(!phone){alert('Please enter WhatsApp number'); return;}
  const guests = document.getElementById('guests').value;
  const date = document.getElementById('rdate').value || 'Today';
  const time = document.getElementById('rtime').value;
  const note = document.getElementById('cnote')?.value || 'No special request';
  const msg = `Hello TERRA Nsukka,%0A%0ANEW TABLE RESERVATION:%0AName: ${name}%0AGuests: ${guests}%0ADate: ${date}%0ATime: ${time}%0APhone: ${phone}%0ANote: ${note}%0A%0APlease confirm my table.`;
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
}
function filterMenu(cat, btn){
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.food-card').forEach(card=>{
    if(cat==='all' || card.dataset.cat===cat){
      card.style.display='flex';
      card.style.animation='fadeUp 0.4s ease';
    } else {
      card.style.display='none';
    }
  });
}
document.addEventListener('DOMContentLoaded', ()=>{
  const d = document.getElementById('rdate');
  if(d){
    d.valueAsDate = new Date();
    d.min = new Date().toISOString().split('T')[0];
  }
});