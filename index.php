<?php include('php/header.php'); ?>

<?php
Echo "Test "
?>
<?php
// Tableau contenant les chemins des images du carrousel
$carouselImages = [
    "asset/img/3.png",
    "asset/img/4.png",
    "asset/img/2.png"
];
?>

<!-- nav carrousel -->
<div class="row">
  <nav id="carouselExampleSlidesOnly" class="col-lg-12 position-relative slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <?php foreach ($carouselImages as $index => $imagePath): ?>
        <div class="carousel-item <?php echo $index === 0 ? 'active' : ''; ?>">
          <img src="<?php echo $imagePath; ?>" class="d-block w-100" alt="...">
        </div>
      <?php endforeach; ?>
    </div>
    <div class="position-absolute top-50 start-50 translate-middle">
      <form class="d-flex mt-3" id="searchForm">
        <input class="form-control me-2" type="search" placeholder="Trouve ton plat" aria-label="Search" id="searchInput">
        <button class="btn btn-outline-success" type="submit">Recherche</button>
      </form>
    </div>
  </nav>
</div>
<div id="searchResults"></div>
      <!-- fin de carroussel-->
      <?php
$categories = [
    ["img" => "asset/img/pate.png", "text" => "Variété de Pates", "link" => "plat.php?category=pates"],
    ["img" => "asset/img/burger.png", "text" => "Variété de Burger", "link" => "plat.php?category=burger"],
    ["img" => "asset/img/asian.png", "text" => "Plats Asiatique", "link" => "plat.php?category=asian"],
    ["img" => "asset/img/veggie.png", "text" => "Plats végétarien", "link" => "plat.php?category=veggie"],
    ["img" => "asset/img/bbq.png", "text" => "Grillade et BBQ", "link" => "plat.php?category=bbq"],
    ["img" => "asset/img/cafe et dessert.png", "text" => "Café et Dessert", "link" => "plat.php?category=dessert"],
];

$plats = [
    ["img" => "asset/img/burger1.png", "text" => "Burger du Chef"],
    ["img" => "asset/img/burger2.png", "text" => "Le Sunchao Burger"],
    ["img" => "asset/img/burger4.png", "text" => "Carni-Burger"],
    ["img" => "asset/img/burger3.png", "text" => "Grain-Burger"],
];
?>

<!-- Section catégorie -->
<div class="row section-categorie d-flex">
    <section class="col-12 justify-content-center row">
        <?php foreach ($categories as $category): ?>
            <div class="col-md-2 card position-relative cate">
                <?php if (isset($category['link'])): ?>
                    <a href="<?php echo $category['link']; ?>">
                        <img src="<?php echo $category['img']; ?>" class="img-fluid margin-card card">
                        <p class="position-absolute top-50 start-50 translate-middle text-break text-plat"><?php echo $category['text']; ?></p>
                    </a>
                <?php else: ?>
                    <img src="<?php echo $category['img']; ?>" class="img-fluid margin-card card">
                    <p class="position-absolute top-50 start-50 translate-middle text-break text-plat"><?php echo $category['text']; ?></p>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>

        <div class="row justify-content-center">
            <?php foreach ($plats as $plat): ?>
                <div class="col-md-2 card position-relative Plats">
                    <img src="<?php echo $plat['img']; ?>" alt="" class="img-fluid margin-card">
                    <p class="position-absolute top-50 start-50 translate-middle text-break text-plat"><?php echo $plat['text']; ?></p>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="row justify-content-center">
            <nav class="col-md-1" aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <span class="page-link">Previous</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active" aria-current="page">
                        <span class="page-link">2</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</div>



<?php include('php/footer.php'); ?>
