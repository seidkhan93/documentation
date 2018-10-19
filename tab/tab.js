const tabsContainer = $(".tabs");
const tabsContent = $(".tabs__content").hide();
let activeTab;

function tabFunction(osType) {
    activeTab && activeTab.hide();
    activeTab = $(`#${osType}`).show();
}

tabsContainer.click((e) => {
    const { target } = e;

    if (!target.dataset.os) {
        e.stopPropagation();
    } else {
        tabFunction(target.dataset.os);
    }
});

tabFunction('mac');
