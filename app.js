// Cart State
let cart = JSON.parse(localStorage.getItem('aman_cart')) || [];

// Telegram Config
const TELEGRAM_BOT_TOKEN = '8955866967:AAFPudhljEgGgRK9GBiWZxmF42jQ2FEYHJw';
const TELEGRAM_CHAT_ID = '5054611816';

// Menu Data - Aman Juice & Ice
const menuData = {
  categories: {
    fresh_juice: { name: "العصائر الطازجة", icon: "🍊", desc: "عصائر طبيعية 100% من الفاكهة الطازجة - ميديم ولارج" },
    smoothie: { name: "سموزي الفواكه", icon: "🥤", desc: "Natural Fruit Smoothie - من فواكه طبيعية مجمدة 100%" },
    milkshake: { name: "ميلك شيك", icon: "🥛", desc: "ميلك شيك غني بالآيس كريم والحليب الطازج مع نكهات مميزة" },
    gelato: { name: "آيس كريم جيلاتو", icon: "🍦", desc: "جيلاتو محضر يدوياً من أجود أنواع الألبان - Home Made Gelato" },
    fruit_salad: { name: "فروت سلاد", icon: "🍓", desc: "قطع فاكهة طازجة مخلوطة مع عصير المانجو مضاف إليها آيس كريم" },
    family_juice: { name: "عبوات العصائر العائلية", icon: "🍹", desc: "عبوات عائلية 1200 مللي من العصائر الطازجة" },
    special: { name: "العروض المميزة", icon: "⭐", desc: "مانجو بلاست وعروض موسمية حصرية" }
  },
  items: [
    // ===== العصائر الطازجة =====
    { id: "fj-1", category: "fresh_juice", name: "بطيخ", nameEn: "Watermelon", priceM: 30, priceL: 35, desc: "عصير بطيخ طبيعي طازج ومنعش." },
    { id: "fj-2", category: "fresh_juice", name: "مانجو", nameEn: "Mango", priceM: 35, priceL: 40, desc: "عصير مانجو طبيعي كثيف وغني." },
    { id: "fj-3", category: "fresh_juice", name: "فراولة", nameEn: "Strawberry", priceM: 35, priceL: 40, desc: "عصير فراولة طازج بطعم لذيذ." },
    { id: "fj-4", category: "fresh_juice", name: "جوافة", nameEn: "Guava", priceM: 35, priceL: 40, desc: "عصير جوافة طبيعي كريمي ومنعش." },
    { id: "fj-5", category: "fresh_juice", name: "موز باللبن", nameEn: "Banana With Milk", priceM: 35, priceL: 40, desc: "عصير موز طازج باللبن الطبيعي." },
    { id: "fj-6", category: "fresh_juice", name: "كيوي", nameEn: "Kiwi", priceM: 70, priceL: 75, desc: "عصير كيوي طبيعي طازج بنكهة فريدة." },
    { id: "fj-7", category: "fresh_juice", name: "أناناس", nameEn: "Pineapple", priceM: 90, priceL: 95, desc: "عصير أناناس طبيعي استوائي منعش." },
    { id: "fj-8", category: "fresh_juice", name: "عنب", nameEn: "Grape", priceM: 35, priceL: 40, desc: "عصير عنب طبيعي طازج." },
    { id: "fj-9", category: "fresh_juice", name: "تفاح", nameEn: "Apple", priceM: 35, priceL: 40, desc: "عصير تفاح طبيعي منعش." },
    { id: "fj-10", category: "fresh_juice", name: "برتقال", nameEn: "Orange", priceM: 40, priceL: 45, desc: "عصير برتقال طازج معصور لحظة الطلب." },
    { id: "fj-11", category: "fresh_juice", name: "ليمون", nameEn: "Lemon", priceM: 30, priceL: 35, desc: "عصير ليمون طازج منعش ومثلج." },
    { id: "fj-12", category: "fresh_juice", name: "بلح مع اللبن", nameEn: "Dates With Milk", priceM: 35, priceL: 40, desc: "بلح طبيعي مخفوق مع الحليب الطازج." },
    { id: "fj-13", category: "fresh_juice", name: "أفوكادو", nameEn: "Avocado", priceM: 90, priceL: 100, desc: "عصير أفوكادو كريمي وغني." },
    { id: "fj-14", category: "fresh_juice", name: "أفوكادو مع المكسرات", nameEn: "Avocado With Nuts", priceM: 110, priceL: 120, desc: "عصير أفوكادو فاخر مع المكسرات المشكلة." },
    { id: "fj-15", category: "fresh_juice", name: "خوخ (موسمي)", nameEn: "Peach (Seasonal)", priceM: 35, priceL: 40, desc: "عصير خوخ طبيعي موسمي طازج." },
    { id: "fj-16", category: "fresh_juice", name: "تين شوكي", nameEn: "Prickly Pear", priceM: 35, priceL: 40, desc: "عصير تين شوكي طبيعي منعش." },
    { id: "fj-17", category: "fresh_juice", name: "رمان", nameEn: "Pomegranate", priceM: 35, priceL: 40, desc: "عصير رمان طبيعي غني بمضادات الأكسدة." },
    { id: "fj-18", category: "fresh_juice", name: "كريز (موسمي)", nameEn: "Cherry (Seasonal)", priceM: 65, priceL: 70, desc: "عصير كريز موسمي طازج بنكهة فريدة." },

    // ===== سموزي الفواكه =====
    { id: "sm-1", category: "smoothie", name: "مانجو خوخ", nameEn: "Mango Peach", priceM: 50, priceL: 55, desc: "سموزي مانجو مع الخوخ الطبيعي المجمد." },
    { id: "sm-2", category: "smoothie", name: "مانجو كيوي", nameEn: "Mango Kiwi", priceM: 65, priceL: 70, desc: "سموزي مانجو مع الكيوي الطبيعي." },
    { id: "sm-3", category: "smoothie", name: "بطيخ نعناع", nameEn: "Watermelon Mint", priceM: 35, priceL: 40, desc: "سموزي بطيخ منعش مع النعناع الطازج." },
    { id: "sm-4", category: "smoothie", name: "ليمون نعناع", nameEn: "Lemon Mint", priceM: 35, priceL: 40, desc: "سموزي ليمون بالنعناع الطازج المثلج." },
    { id: "sm-5", category: "smoothie", name: "كواترو", nameEn: "Quattro", priceM: null, priceL: null, price: 65, desc: "مزيج مانجو + فراولة + موز + كيوي في سموزي واحد مميز." },
    { id: "sm-6", category: "smoothie", name: "زبادي بيري", nameEn: "Yogurt Berry", priceM: null, priceL: null, price: 65, desc: "زبادي آيس كريم + فراولة + رمان + توت أحمر مع التوت المجفف." },
    { id: "sm-7", category: "smoothie", name: "مانجو كوكونت", nameEn: "Mango Coconut", priceM: null, priceL: null, price: 65, desc: "مانجو + كوكونت + موز في سموزي استوائي." },
    { id: "sm-8", category: "smoothie", name: "بلح مع زبدة الفول السوداني", nameEn: "Dates With Peanut Butter", priceM: null, priceL: null, price: 65, desc: "بلح مع زبدة الفول السوداني والمكسرات." },
    { id: "sm-9", category: "smoothie", name: "بينا كولادا", nameEn: "Pina Colada", priceM: null, priceL: null, price: 100, desc: "خليط من الأناناس الطبيعي مع بيوريه جوز الهند - Natural Homemade." },

    // ===== ميلك شيك =====
    { id: "ms-1", category: "milkshake", name: "فراولة", nameEn: "Strawberry", priceM: 40, priceL: 45, desc: "ميلك شيك فراولة غني بالآيس كريم والحليب." },
    { id: "ms-2", category: "milkshake", name: "مانجو", nameEn: "Mango", priceM: 45, priceL: 50, desc: "ميلك شيك مانجو كثيف وكريمي." },
    { id: "ms-3", category: "milkshake", name: "موز", nameEn: "Banana", priceM: 40, priceL: 45, desc: "ميلك شيك موز كلاسيكي لذيذ." },
    { id: "ms-4", category: "milkshake", name: "جوافة", nameEn: "Guava", priceM: 40, priceL: 45, desc: "ميلك شيك جوافة طبيعي." },
    { id: "ms-5", category: "milkshake", name: "فلوريدا", nameEn: "Florida (Mango+Strawberry)", priceM: 40, priceL: 45, desc: "ميلك شيك مانجو وفراولة - مزيج فلوريدا المنعش." },
    { id: "ms-6", category: "milkshake", name: "مونتانا", nameEn: "Montana (Mango+Banana)", priceM: 40, priceL: 45, desc: "ميلك شيك مانجو وموز - خلطة مونتانا الكريمية." },
    { id: "ms-7", category: "milkshake", name: "كوستاريكا", nameEn: "Costarica (Strawberry+Banana)", priceM: 40, priceL: 45, desc: "ميلك شيك فراولة وموز - كوستاريكا اللذيذة." },
    { id: "ms-8", category: "milkshake", name: "هاواي", nameEn: "Hawaii (Banana+Kiwi)", priceM: 65, priceL: 70, desc: "ميلك شيك موز وكيوي - هاواي الاستوائي." },
    { id: "ms-9", category: "milkshake", name: "فانيليا", nameEn: "Vanilla", priceM: 50, priceL: 55, desc: "ميلك شيك فانيليا كلاسيكي." },
    { id: "ms-10", category: "milkshake", name: "شوكولاتة", nameEn: "Chocolate", priceM: 50, priceL: 55, desc: "ميلك شيك شوكولاتة غني وكريمي." },
    { id: "ms-11", category: "milkshake", name: "شوكولاتة بالموز", nameEn: "Chocolate Banana", priceM: 55, priceL: 60, desc: "ميلك شيك شوكولاتة بالموز الطازج." },
    { id: "ms-12", category: "milkshake", name: "دولسي كراميل", nameEn: "Dulce Caramel", priceM: 50, priceL: 55, desc: "ميلك شيك دولسي كراميل حلو ومميز." },
    { id: "ms-13", category: "milkshake", name: "موكا", nameEn: "Mocha", priceM: 50, priceL: 55, desc: "ميلك شيك موكا بمزيج القهوة والشوكولاتة." },
    { id: "ms-14", category: "milkshake", name: "بسكويت لوتس", nameEn: "Lotus Biscuit", priceM: null, priceL: null, price: 80, desc: "ميلك شيك بسكويت لوتس الشهير الغني." },
    { id: "ms-15", category: "milkshake", name: "بسكويت لوتس مع كيت كات", nameEn: "Lotus KitKat", priceM: null, priceL: null, price: 85, desc: "ميلك شيك بسكويت لوتس مع كيت كات - جديد!" },
    { id: "ms-16", category: "milkshake", name: "نوتيلا بندق", nameEn: "Nutella Hazelnut", priceM: null, priceL: null, price: 80, desc: "ميلك شيك نوتيلا مع البندق الطبيعي." },
    { id: "ms-17", category: "milkshake", name: "فستق", nameEn: "Pistachio", priceM: null, priceL: null, price: 100, desc: "ميلك شيك فستق فاخر بنكهة مميزة." },
    { id: "ms-18", category: "milkshake", name: "أوريو", nameEn: "Oreo", priceM: null, priceL: null, price: 55, desc: "ميلك شيك أوريو كلاسيكي لذيذ." },
    { id: "ms-19", category: "milkshake", name: "أوريو شوكولاتة", nameEn: "Oreo Chocolate", priceM: null, priceL: null, price: 55, desc: "ميلك شيك أوريو بالشوكولاتة الغنية." },
    { id: "ms-20", category: "milkshake", name: "أوريو زبدة الفول السوداني", nameEn: "Oreo Peanut Butter", priceM: null, priceL: null, price: 60, desc: "ميلك شيك أوريو مع زبدة الفول السوداني." },
    { id: "ms-21", category: "milkshake", name: "سنيكرز شوكولاتة", nameEn: "Snickers Chocolate", priceM: null, priceL: null, price: 80, desc: "ميلك شيك سنيكرز بالشوكولاتة والكراميل." },
    { id: "ms-22", category: "milkshake", name: "سنيكرز فانيليا", nameEn: "Snickers Vanilla", priceM: null, priceL: null, price: 75, desc: "ميلك شيك سنيكرز بالفانيليا الكريمية." },
    { id: "ms-23", category: "milkshake", name: "كيت كات", nameEn: "Kit Kat", priceM: null, priceL: null, price: 75, desc: "ميلك شيك كيت كات المقرمش." },
    { id: "ms-24", category: "milkshake", name: "إم آند إمز", nameEn: "M&M's", priceM: null, priceL: null, price: 100, desc: "ميلك شيك إم آند إمز الملون والمميز." },
    { id: "ms-25", category: "milkshake", name: "مستكة بالفستق", nameEn: "Mastic with Pistachio", priceM: null, priceL: null, price: 100, desc: "ميلك شيك مستكة مع الفستق الفاخر - جديد!" },
    { id: "ms-26", category: "milkshake", name: "شوكولاتة أوريو بالموز", nameEn: "Banana Chocolate Oreo", priceM: null, priceL: null, price: 60, desc: "ميلك شيك شوكولاتة أوريو مع الموز - جديد!" },

    // ===== آيس كريم جيلاتو (Scoop) =====
    { id: "gl-1", category: "gelato", name: "فانيليا", nameEn: "Vanilla", price: 15, desc: "جيلاتو فانيليا كلاسيكي كريمي - Scoop واحد." },
    { id: "gl-2", category: "gelato", name: "شوكولاتة بلجيكية", nameEn: "Belgian Chocolate", price: 20, desc: "جيلاتو شوكولاتة بلجيكية فاخرة." },
    { id: "gl-3", category: "gelato", name: "مانجو ألفونسو", nameEn: "Mango Alphonso", price: 20, desc: "جيلاتو مانجو ألفونسو الهندي الشهير." },
    { id: "gl-4", category: "gelato", name: "فراولة", nameEn: "Strawberry", price: 20, desc: "جيلاتو فراولة طبيعي بقطع الفراولة." },
    { id: "gl-5", category: "gelato", name: "زبادي توت", nameEn: "Yogurt Berry", price: 20, desc: "جيلاتو زبادي بالتوت الطبيعي." },
    { id: "gl-6", category: "gelato", name: "موكا", nameEn: "Mocha", price: 20, desc: "جيلاتو موكا بمزيج القهوة والشوكولاتة." },
    { id: "gl-7", category: "gelato", name: "مستكة مع الفستق", nameEn: "Mastic with Pistachio", price: 20, desc: "جيلاتو مستكة فاخر مع الفستق الطبيعي." },
    { id: "gl-8", category: "gelato", name: "بغاشة بالعسل", nameEn: "Bughasha with Honey", price: 20, desc: "جيلاتو بغاشة بالعسل الطبيعي." },
    { id: "gl-9", category: "gelato", name: "بسكويت لوتس", nameEn: "Biscoff Lotus", price: 30, desc: "جيلاتو بسكويت لوتس الكراميلي الشهير." },
    { id: "gl-10", category: "gelato", name: "أفوكادو", nameEn: "Avocado", price: 30, desc: "جيلاتو أفوكادو كريمي وصحي." },
    { id: "gl-11", category: "gelato", name: "فانيليا مع الأوريو", nameEn: "Vanilla Oreo", price: 20, desc: "جيلاتو فانيليا مع قطع الأوريو المقرمشة." },
    { id: "gl-12", category: "gelato", name: "سنيكرز", nameEn: "Snickers", price: 20, desc: "جيلاتو سنيكرز بالشوكولاتة والكراميل والفول السوداني." },
    { id: "gl-13", category: "gelato", name: "ليمون نعناع", nameEn: "Mint Lemon", price: 20, desc: "جيلاتو ليمون بالنعناع المنعش." },
    { id: "gl-14", category: "gelato", name: "مدلعة كنافة وبسبوسة", nameEn: "Spoiled by Kunafa and Basbousa", price: 20, desc: "جيلاتو بنكهة الكنافة والبسبوسة الشرقية." },
    { id: "gl-15", category: "gelato", name: "فستق طبيعي", nameEn: "Pistachio", price: 30, desc: "جيلاتو فستق طبيعي فاخر." },
    { id: "gl-16", category: "gelato", name: "بندق طبيعي", nameEn: "Hazelnut", price: 30, desc: "جيلاتو بندق طبيعي كريمي." },
    { id: "gl-17", category: "gelato", name: "فيريرو روشيه", nameEn: "Ferrero Rocher", price: 20, desc: "جيلاتو فيريرو روشيه بالشوكولاتة والبندق." },
    { id: "gl-18", category: "gelato", name: "فيريرو روشيه وايت", nameEn: "Ferrero Rocher White", price: 20, desc: "جيلاتو فيريرو روشيه الأبيض." },
    { id: "gl-19", category: "gelato", name: "بلح", nameEn: "Dates", price: 20, desc: "جيلاتو بلح طبيعي بنكهة شرقية أصيلة." },
    { id: "gl-20", category: "gelato", name: "دولسي كراميل", nameEn: "Dulce Caramel", price: 20, desc: "جيلاتو دولسي كراميل حلو ومميز." },
    { id: "gl-21", category: "gelato", name: "عسل بكيك الفادج", nameEn: "Fudge Cake Honey", price: 20, desc: "جيلاتو عسل مع كيك الفادج الغني." },
    { id: "gl-22", category: "gelato", name: "كيوي", nameEn: "Kiwi", price: 30, desc: "جيلاتو كيوي طبيعي منعش." },

    // ===== فروت سلاد =====
    { id: "fs-1", category: "fruit_salad", name: "فروت سلاد ميديم", nameEn: "Fruit Salad Medium", price: 65, desc: "قطع فاكهة طازجة مخلوطة مع عصير المانجو مضاف إليها اختيارك المفضل من الآيس كريم." },
    { id: "fs-2", category: "fruit_salad", name: "فروت سلاد لارج", nameEn: "Fruit Salad Large", price: 70, desc: "حجم كبير من قطع الفاكهة الطازجة مع عصير المانجو والآيس كريم." },

    // ===== عبوات العصائر العائلية (1200 مللي) =====
    { id: "fam-1", category: "family_juice", name: "مانجو عائلي", nameEn: "Mango", price: 80, desc: "عبوة عائلية 1200 مللي عصير مانجو طازج." },
    { id: "fam-2", category: "family_juice", name: "فراولة عائلي", nameEn: "Strawberry", price: 80, desc: "عبوة عائلية 1200 مللي عصير فراولة طازج." },
    { id: "fam-3", category: "family_juice", name: "برتقال عائلي", nameEn: "Orange", price: 70, desc: "عبوة عائلية 1200 مللي عصير برتقال طازج." },
    { id: "fam-4", category: "family_juice", name: "جوافة عائلي", nameEn: "Guava", price: 80, desc: "عبوة عائلية 1200 مللي عصير جوافة طازج." },
    { id: "fam-5", category: "family_juice", name: "كيوي عائلي", nameEn: "Kiwi", price: 150, desc: "عبوة عائلية 1200 مللي عصير كيوي طازج." },
    { id: "fam-6", category: "family_juice", name: "بلح مع اللبن عائلي", nameEn: "Dates with Milk", price: 80, desc: "عبوة عائلية 1200 مللي بلح باللبن." },
    { id: "fam-7", category: "family_juice", name: "ليمون عائلي", nameEn: "Lemon", price: 70, desc: "عبوة عائلية 1200 مللي عصير ليمون طازج." },
    { id: "fam-8", category: "family_juice", name: "ليمون نعناع عائلي", nameEn: "Lemon Mint", price: 80, desc: "عبوة عائلية 1200 مللي ليمون بالنعناع." },
    { id: "fam-9", category: "family_juice", name: "كواترو عائلي", nameEn: "Quattro", price: 90, desc: "عبوة عائلية 1200 مللي كواترو (مانجو + فراولة + برتقال)." },
    { id: "fam-10", category: "family_juice", name: "مارتن بلند عائلي", nameEn: "Martin Blend", price: 90, desc: "عبوة عائلية 1200 مللي مارتن بلند (مانجو + جوافة + فراولة)." },

    // ===== العروض المميزة =====
    { id: "sp-1", category: "special", name: "مانجو بلاست", nameEn: "Mango Blast", price: 70, desc: "عصير المانجو مع الآيس كريم الفانيليا مضاف إليه مكعبات المانجو الطازجة - NEW!" }
  ],
  complaintNumber: "01003499900",
  instagram: "Juice&ice أمان"
};

// Helper: get display price for an item
function getDisplayPrice(item) {
  if (item.price) return `${item.price} جنيه`;
  if (item.priceM && item.priceL) return `${item.priceM} / ${item.priceL} جنيه`;
  return '';
}

function getMinPrice(item) {
  if (item.price) return item.price;
  if (item.priceM) return item.priceM;
  return 0;
}

// Router Logic
function handleRouting() {
  const path = window.location.hash || '#/';
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (path === '#/' || path === '') {
    renderHome();
    return;
  }

  if (path.startsWith('#/category/')) {
    const catId = path.replace('#/category/', '');
    renderCategory(catId);
    return;
  }

  if (path.startsWith('#/item/')) {
    const itemId = path.replace('#/item/', '');
    renderItemDetail(itemId);
    return;
  }

  window.location.hash = '#/';
}

// Render Home Page
function renderHome() {
  const mainContent = document.getElementById('main-content');

  let categoriesHTML = '';
  for (const [id, cat] of Object.entries(menuData.categories)) {
    const itemCount = menuData.items.filter(i => i.category === id).length;
    categoriesHTML += `
      <div class="category-card" onclick="window.location.hash = '#/category/${id}'">
        <div class="cat-icon">${cat.icon}</div>
        <h3>${cat.name}</h3>
        <p>${itemCount} صنف</p>
      </div>
    `;
  }

  // Featured items - gelato and special
  const featured = menuData.items.filter(i => i.category === 'special' || i.category === 'gelato' || i.category === 'smoothie').slice(0, 4);
  let featuredHTML = featured.map(item => `
    <div class="item-card" onclick="window.location.hash = '#/item/${item.id}'">
      <div class="item-badge">${item.category === 'special' ? 'جديد 🔥' : 'مميز ⭐'}</div>
      <div class="item-card-content">
        <h3>${item.name}</h3>
        ${item.nameEn ? `<span class="name-en">${item.nameEn}</span>` : ''}
        <p>${item.desc.substring(0, 60)}...</p>
        <div class="item-card-footer">
          <span class="price">${getDisplayPrice(item)}</span>
          <span class="view-details">عرض التفاصيل ←</span>
        </div>
      </div>
    </div>
  `).join('');

  mainContent.innerHTML = `
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-brand">
          <span class="hero-icon">🍦</span>
          <span class="hero-icon">🥤</span>
          <span class="hero-icon">🍊</span>
        </div>
        <h1>أمان <span class="hero-en">Juice & Ice</span></h1>
        <p>عصائر طبيعية طازجة 100% وآيس كريم جيلاتو محضر يدوياً بأجود المكونات</p>
        <div class="delivery-badge-container">
          <span class="badge badge-fresh">🍃 طبيعي 100%</span>
          <span class="badge badge-delivery">🛵 دليفري سريع</span>
          <span class="badge badge-handmade">🎨 جيلاتو يدوي</span>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">أقسام المنيو</h2>
      <div class="categories-grid">
        ${categoriesHTML}
      </div>
    </section>

    <section class="section bg-light">
      <h2 class="section-title">الأصناف المميزة</h2>
      <div class="items-grid">
        ${featuredHTML}
      </div>
    </section>
  `;
}

// Render Category Page
function renderCategory(catId) {
  const mainContent = document.getElementById('main-content');
  const cat = menuData.categories[catId];
  if (!cat) {
    window.location.hash = '#/';
    return;
  }

  const items = menuData.items.filter(i => i.category === catId);

  // Check if items have sizes (M/L)
  const hasSizes = items.some(i => i.priceM && i.priceL);

  const itemsHTML = items.map(item => {
    let priceDisplay = '';
    if (item.priceM && item.priceL) {
      priceDisplay = `<div class="price-sizes">
        <span class="size-tag"><span class="size-label">M</span> ${item.priceM}</span>
        <span class="size-tag"><span class="size-label">L</span> ${item.priceL}</span>
      </div>`;
    } else if (item.price) {
      priceDisplay = `<span class="price">${item.price} جنيه</span>`;
    }

    return `
      <div class="item-card" onclick="window.location.hash = '#/item/${item.id}'">
        <div class="item-card-content">
          <h3>${item.name}</h3>
          ${item.nameEn ? `<span class="name-en">${item.nameEn}</span>` : ''}
          <p>${item.desc}</p>
          <div class="item-card-footer">
            ${priceDisplay}
            <span class="view-details">عرض التفاصيل ←</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  mainContent.innerHTML = `
    <div class="page-header">
      <a href="#/" class="back-link">🔙 العودة للرئيسية</a>
      <div class="header-desc">
        <span class="large-icon">${cat.icon}</span>
        <h1>${cat.name}</h1>
        <p>${cat.desc}</p>
      </div>
    </div>

    <section class="section">
      <div class="items-grid">
        ${itemsHTML.length > 0 ? itemsHTML : '<p class="no-items">لا توجد أصناف في هذه الفئة حالياً</p>'}
      </div>
    </section>
  `;
}

// Render Item Detail Page
function renderItemDetail(itemId) {
  const mainContent = document.getElementById('main-content');
  const item = menuData.items.find(i => i.id === itemId);
  if (!item) {
    window.location.hash = '#/';
    return;
  }

  const category = menuData.categories[item.category];
  const hasSizes = item.priceM && item.priceL;

  // Price section
  let priceSection = '';
  if (hasSizes) {
    priceSection = `
      <div class="size-selector-container">
        <span class="label">اختر الحجم:</span>
        <div class="size-selector">
          <button class="size-btn active" data-size="M" data-price="${item.priceM}" onclick="selectSize(this)">
            <span class="size-letter">M</span>
            <span class="size-price">${item.priceM} جنيه</span>
          </button>
          <button class="size-btn" data-size="L" data-price="${item.priceL}" onclick="selectSize(this)">
            <span class="size-letter">L</span>
            <span class="size-price">${item.priceL} جنيه</span>
          </button>
        </div>
      </div>
    `;
  } else {
    priceSection = `
      <div class="detail-price-box">
        <span class="label">السعر:</span>
        <span class="detail-price">${item.price} جنيه</span>
      </div>
    `;
  }

  // Related items
  const related = menuData.items.filter(i => i.category === item.category && i.id !== item.id).slice(0, 3);
  const relatedHTML = related.map(rel => `
    <div class="item-card compact-card" onclick="window.location.hash = '#/item/${rel.id}'">
      <h3>${rel.name}</h3>
      ${rel.nameEn ? `<span class="name-en">${rel.nameEn}</span>` : ''}
      <div class="item-card-footer">
        <span class="price">${getDisplayPrice(rel)}</span>
        <span class="view-details">عرض التفاصيل ←</span>
      </div>
    </div>
  `).join('');

  mainContent.innerHTML = `
    <div class="page-header">
      <a href="#/category/${item.category}" class="back-link">🔙 العودة إلى ${category.name}</a>
    </div>

    <div class="item-detail-container">
      <div class="item-detail-card">
        <div class="item-detail-header">
          <span class="category-tag">${category.icon} ${category.name}</span>
          <h1>${item.name}</h1>
          ${item.nameEn ? `<span class="name-en-detail">${item.nameEn}</span>` : ''}
        </div>
        
        <p class="item-detail-desc">${item.desc}</p>
        
        <div class="item-detail-meta">
          ${priceSection}

          <!-- Quantity Selector -->
          <div class="quantity-selector-container">
            <span class="label">الكمية:</span>
            <div class="quantity-selector">
              <button class="qty-btn" id="qty-minus">-</button>
              <span class="qty-val" id="qty-value">1</span>
              <button class="qty-btn" id="qty-plus">+</button>
            </div>
          </div>

          <!-- Notes -->
          <div class="customization-section">
            <h3>ملاحظات إضافية (اختياري):</h3>
            <textarea id="item-notes" placeholder="مثال: بدون سكر، زيادة ثلج، نكهة آيس كريم معينة..." class="search-input" style="width: 100%; height: 80px; resize: none; padding: 0.75rem; font-family: inherit;"></textarea>
          </div>

          <!-- Add to Cart Button -->
          <button class="btn btn-primary btn-block btn-lg" id="add-to-cart-btn" style="width: 100%; display: flex; justify-content: center; align-items: center; gap: 0.5rem;">
            🛒 إضافة إلى السلة
          </button>
        </div>
      </div>
    </div>

    ${relatedHTML.length > 0 ? `
      <section class="section related-section">
        <h2 class="section-title">أصناف مشابهة قد تعجبك</h2>
        <div class="items-grid-related">
          ${relatedHTML}
        </div>
      </section>
    ` : ''}
  `;

  // Bind Events
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const qtyVal = document.getElementById('qty-value');
  const addBtn = document.getElementById('add-to-cart-btn');
  const itemNotes = document.getElementById('item-notes');

  if (qtyMinus && qtyPlus && qtyVal) {
    qtyMinus.addEventListener('click', () => {
      let v = parseInt(qtyVal.textContent) || 1;
      if (v > 1) qtyVal.textContent = v - 1;
    });
    qtyPlus.addEventListener('click', () => {
      let v = parseInt(qtyVal.textContent) || 1;
      qtyVal.textContent = v + 1;
    });
  }

  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const quantity = parseInt(qtyVal.textContent) || 1;
      const notes = itemNotes ? itemNotes.value.trim() : '';

      // Determine selected size and price
      let selectedSize = '';
      let selectedPrice = item.price || item.priceM;

      if (hasSizes) {
        const activeBtn = document.querySelector('.size-btn.active');
        if (activeBtn) {
          selectedSize = activeBtn.getAttribute('data-size');
          selectedPrice = parseInt(activeBtn.getAttribute('data-price'));
        }
      }

      addToCart(item.id, quantity, notes, selectedSize, selectedPrice);
    });
  }
}

// Size selector
function selectSize(btn) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
window.selectSize = selectSize;

// Search system
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    const mainContent = document.getElementById('main-content');

    if (q === '') {
      handleRouting();
      return;
    }

    const matches = menuData.items.filter(item =>
      item.name.toLowerCase().includes(q) ||
      (item.nameEn && item.nameEn.toLowerCase().includes(q)) ||
      item.desc.toLowerCase().includes(q)
    );

    const matchesHTML = matches.map(item => `
      <div class="item-card" onclick="window.location.hash = '#/item/${item.id}'">
        <div class="item-card-content">
          <h3>${item.name}</h3>
          ${item.nameEn ? `<span class="name-en">${item.nameEn}</span>` : ''}
          <p>${item.desc}</p>
          <div class="item-card-footer">
            <span class="price">${getDisplayPrice(item)}</span>
            <span class="view-details">عرض التفاصيل ←</span>
          </div>
        </div>
      </div>
    `).join('');

    mainContent.innerHTML = `
      <div class="page-header">
        <a href="#/" class="back-link">🔙 العودة للرئيسية</a>
        <h1>نتائج البحث عن: "${q}"</h1>
        <p>تم العثور على ${matches.length} صنف</p>
      </div>
      <section class="section">
        <div class="items-grid">
          ${matchesHTML.length > 0 ? matchesHTML : '<p class="no-items">لم يتم العثور على أي نتائج مطابقة لبحثك</p>'}
        </div>
      </section>
    `;
  });
}

// Setup Contact info
function setupDeliveryInfo() {
  const deliveryWrapper = document.getElementById('delivery-links');
  if (!deliveryWrapper) return;

  deliveryWrapper.innerHTML = `
    <div class="complaints-num">
      <h4>📞 للشكاوى والمقترحات:</h4>
      <span class="complaints-btn static-text">${menuData.complaintNumber}</span>
    </div>
    <div class="social-links">
      <h4>📱 تابعنا على:</h4>
      <span class="social-btn static-text">📸 ${menuData.instagram}</span>
    </div>
  `;
}

// ===== Cart Operations =====
function saveCart() {
  localStorage.setItem('aman_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (totalQty > 0) {
    badge.textContent = totalQty;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

function addToCart(itemId, quantity, notes, size, price) {
  const item = menuData.items.find(i => i.id === itemId);
  if (!item) return;

  const cartKey = `${itemId}_${size}_${notes}`;
  const existingIdx = cart.findIndex(c => c.cartKey === cartKey);

  const displayName = size ? `${item.name} (${size})` : item.name;

  if (existingIdx > -1) {
    cart[existingIdx].quantity += quantity;
  } else {
    cart.push({
      cartKey: cartKey,
      id: itemId,
      name: displayName,
      price: price,
      quantity: quantity,
      notes: notes,
      size: size
    });
  }
  saveCart();
  showToast(`تم إضافة ${displayName} إلى السلة!`);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function toggleCartModal(open) {
  const modal = document.getElementById('cart-modal');
  if (!modal) return;
  if (open) {
    modal.classList.add('open');
    renderCartItems();
    showCartScreen();
  } else {
    modal.classList.remove('open');
  }
}

function showCartScreen() {
  const cs = document.getElementById('cart-screen');
  const co = document.getElementById('checkout-screen');
  if (cs && co) { cs.style.display = 'flex'; co.style.display = 'none'; }
}

function showCheckoutScreen() {
  const cs = document.getElementById('cart-screen');
  const co = document.getElementById('checkout-screen');
  if (cs && co) { cs.style.display = 'none'; co.style.display = 'flex'; }
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  const totalPriceEl = document.getElementById('cart-total-price');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="empty-icon">🥤</div>
        <p>سلتك فارغة حالياً</p>
        <button class="btn btn-primary" onclick="toggleCartModal(false)">تصفح المنيو</button>
      </div>
    `;
    if (totalPriceEl) totalPriceEl.textContent = '0 جنيه';
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) checkoutBtn.disabled = false;

  let total = 0;
  let html = '';
  cart.forEach((ci, idx) => {
    const itemTotal = ci.price * ci.quantity;
    total += itemTotal;
    const notesHtml = ci.notes ? `<div class="cart-item-customs">📝 ${ci.notes}</div>` : '';
    html += `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${ci.name}</h4>
          ${notesHtml}
          <div class="cart-item-price">${ci.price} جنيه</div>
        </div>
        <div class="cart-item-actions">
          <button class="qty-btn" onclick="updateCartItemQty(${idx}, -1)">-</button>
          <span class="qty-val">${ci.quantity}</span>
          <button class="qty-btn" onclick="updateCartItemQty(${idx}, 1)">+</button>
        </div>
        <div class="cart-item-total">${itemTotal} جنيه</div>
      </div>
    `;
  });
  container.innerHTML = html;
  if (totalPriceEl) totalPriceEl.textContent = `${total} جنيه`;
}

function updateCartItemQty(index, change) {
  if (index < 0 || index >= cart.length) return;
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  saveCart();
  renderCartItems();
}

function submitOrder() {
  const nameInput = document.getElementById('checkout-name');
  const phoneInput = document.getElementById('checkout-phone');
  const addressInput = document.getElementById('checkout-address');
  const confirmBtn = document.getElementById('confirm-checkout-btn');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const address = addressInput ? addressInput.value.trim() : '';

  if (!phone) {
    alert('من فضلك أدخل رقم التلفون للتواصل.');
    if (phoneInput) phoneInput.focus();
    return;
  }
  if (!address) {
    alert('من فضلك أدخل العنوان بالتفصيل لتوصيل الطلب.');
    if (addressInput) addressInput.focus();
    return;
  }

  // Loading state
  const originalBtnText = confirmBtn ? confirmBtn.textContent : 'تأكيد وإرسال';
  if (confirmBtn) {
    confirmBtn.disabled = true;
    confirmBtn.textContent = 'جاري إرسال الطلب... ⏳';
  }

  let itemsText = '';
  let totalPrice = 0;
  cart.forEach(ci => {
    const itemTotal = ci.price * ci.quantity;
    totalPrice += itemTotal;
    itemsText += `• ${ci.quantity}x ${ci.name} (${itemTotal} جنيه)\n`;
    if (ci.notes) itemsText += `  - ملاحظة: ${ci.notes}\n`;
  });

  const namePart = name ? `👤 <b>الاسم:</b> ${name}\n` : '';
  const msg = `🔔 <b>طلب جديد من أمان Juice & Ice</b> 🍦🥤

<b>بيانات التوصيل:</b>
${namePart}📞 <b>رقم التلفون:</b> ${phone}
📍 <b>العنوان:</b> ${address}

<b>الطلبات:</b>
--------------------------------
${itemsText}--------------------------------
💵 <b>إجمالي الطلب:</b> ${totalPrice} جنيه

<b>شكراً لاختياركم أمان Juice & Ice!</b> ❤️🍦`;

  fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: msg,
      parse_mode: 'HTML'
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      cart = [];
      saveCart();
      toggleCartModal(false);
      if (nameInput) nameInput.value = '';
      if (phoneInput) phoneInput.value = '';
      if (addressInput) addressInput.value = '';

      alert('🎉 تم إرسال طلبك بنجاح! سنتواصل معك قريباً لتأكيد التوصيل.');
    })
    .catch(error => {
      console.error('Error sending message:', error);
      alert('❌ حدث خطأ أثناء إرسال الطلب. يرجى التأكد من اتصال الإنترنت والمحاولة مرة أخرى.');
    })
    .finally(() => {
      if (confirmBtn) {
        confirmBtn.disabled = false;
        confirmBtn.textContent = originalBtnText;
      }
    });
}

// Expose to global for inline onclick handlers
window.updateCartItemQty = updateCartItemQty;
window.toggleCartModal = toggleCartModal;

function setupCartEvents() {
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartOverlay = document.getElementById('cart-overlay');
  const checkoutBtn = document.getElementById('checkout-btn');
  const backToCartBtn = document.getElementById('back-to-cart-btn');
  const confirmCheckoutBtn = document.getElementById('confirm-checkout-btn');

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', () => toggleCartModal(true));
  if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCartModal(false));
  if (cartOverlay) cartOverlay.addEventListener('click', () => toggleCartModal(false));
  if (checkoutBtn) checkoutBtn.addEventListener('click', showCheckoutScreen);
  if (backToCartBtn) backToCartBtn.addEventListener('click', showCartScreen);
  if (confirmCheckoutBtn) confirmCheckoutBtn.addEventListener('click', submitOrder);

  updateCartBadge();
}

// Initialize application
window.addEventListener('DOMContentLoaded', () => {
  // Clear old cart from the previous restaurant
  if (localStorage.getItem('cart')) {
    localStorage.removeItem('cart');
  }

  setupSearch();
  setupDeliveryInfo();
  setupCartEvents();
  handleRouting();

  window.addEventListener('hashchange', handleRouting);
});
