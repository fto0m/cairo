var quickViewApi = {
    viewProductDetails: function (product_id) {
        console.log("the product id is:", product_id)
        var postData = {
            productId: product_id
        };
        $.apiCall({
            type: 'POST',
            data: postData,
            url: '/quickview_product_details',
            success: function (reponse) {
                $("#quick-view-modal").html(reponse.html);
                $(document).trigger("hide-ajax-loading");

                $("#quick-view-btn").magnificPopup({
                    items: {
                        src: '#quick-view-modal',
                        type: 'inline'
                    },
                    callbacks: {

                        open: function () {
                            $(".thumbnails img").on("click", function () {
                                $(".thumbnails img").removeClass("active");
                                $(this).addClass("active");
                                $(".largeImg").attr("src", $(this).attr("data-src"));
                            });

                            $(".tabs-product-details").tabs();

                            $('.quickViewPictureThumbSlider').slick({
                                speed: 500,
                                dots: false,
                                infinite: true,
                                slidesToShow: 4,
                                slidesToScroll: 4
                            });

                            //Accepted bank list
                            $('.accepted-bank-list').slick({
                                speed: 500,
                                dots: false,
                                infinite: true,
                                slidesToShow: 5,
                                slidesToScroll: 5
                            });

                            //related & also bough products slider
                            $('.related-products-list').slick({
                                dots: false,
                                infinite: true,
                                speed: 500,
                                slidesToShow: 5,
                                slidesToScroll: 5,
                                responsive: [{
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 4,
                                        slidesToScroll: 4
                                    }
                                }, {
                                    breakpoint: 600,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3
                                    }
                                }, {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2
                                    }
                                }, {
                                    breakpoint: 360,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                    }
                                }]

                            });
                            $('.recently-viewed-list').slick({
                                dots: false,
                                infinite: true,
                                speed: 500,
                                slidesToShow: 5,
                                slidesToScroll: 5,
                                responsive: [{
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 4,
                                        slidesToScroll: 4
                                    }
                                }, {
                                    breakpoint: 600,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3
                                    }
                                }, {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2
                                    }
                                }, {
                                    breakpoint: 360,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                    }
                                }]

                            });

                            $('.also-purchased-list').slick({
                                dots: false,
                                infinite: true,
                                speed: 500,
                                slidesToShow: 5,
                                slidesToScroll: 5,
                                responsive: [{
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 4,
                                        slidesToScroll: 4
                                    }
                                }, {
                                    breakpoint: 600,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3
                                    }
                                }, {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2
                                    }
                                }, {
                                    breakpoint: 360,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                    }
                                }]
                            });
                        }
                    },
                    preloader: true
                });

                $(".mfp-close").on("click", function () {
                    $("#quick-view-modal").html("");
                    $("#quick-view-modal").destroy();
                });
                $("#quick-view-btn").click();
                $('#quick-view-modal .related-products-grid .owl-carousel').owlCarousel({
                    dots: true,
                    autoplay: true,
                    nav: true,
                    loop: true,
                    margin: 10,
                    responsive: {
                        0: {
                            items: 1
                        },
                        575: {
                            items: 2
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: 4
                        },
                        1500: {
                            items: 4
                        }
                    }
                });
            }
        });
    }
};