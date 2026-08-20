var NopStationThemeCommon = {
    quickView: function (buttonContainerName) {
        var quick_view_modal = '<div id="quick-view-modal"></div>';
        $("body").append(quick_view_modal);
        $("body").append("<button id='quick-view-btn'>Quick View</button>");

        $(".product-item[data-productid]").each(function () {
            var quick_view_button = '<i><a data-product-id="' + $(this).data("productid") + '" class="quick-view-plugin-btn btn button-2 text-white" onClick="NopStationThemeCommon.quickViewButtonClick(' + $(this).data("productid") + ')"><i class="fa fa-eye" aria-hidden="true"></i></a></i>'; //style="display:none"

            var arr = buttonContainerName.split(',');
            for (var i = 0; i < arr.length; i++) {
                if ($(this).find(arr[i]).find("a.quick-view-plugin-btn").length < 1)
                    $(this).find(arr[i]).append(quick_view_button);
            }
        });
    },
    quickViewButtonClick: function (product_id) {
        displayAjaxLoading(true);
        quickViewApi.viewProductDetails(product_id);
        displayAjaxLoading(false);
    }
};