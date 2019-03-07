define(["knockout"], function(ko) {
  ko.components.register("main-menu", {
    template: { require: "text!components/main-menu/main-menu-component.html" },
    viewModel: { require: "components/main-menu/main-menu-viewmodel" }
  });
  ko.components.register("home-page", {
    template: { require: "text!components/home-page/home-page-component.html" }
  });
  ko.components.register("apply-now", {
    template: { require: "text!components/apply-now/apply-now-component.html" },
    viewModel: { require: "components/apply-now/apply-now-viewmodel" }
  });
  ko.components.register("apply-now-basic-info", {
    template: { require: "text!components/apply-now/basic-info/component.html" },
    viewModel: { require: "components/apply-now/basic-info/component" }
  });
  ko.components.register("apply-now-admission", {
    template: { require: "text!components/apply-now/admission/component.html" },
    viewModel: { require: "components/apply-now/admission/component" }
  });
  ko.components.register("apply-now-highschool-info", {
    template: { require: "text!components/apply-now/highschool-info/component.html" },
    viewModel: { require: "components/apply-now/highschool-info/component" }
  });
  ko.components.register("apply-now-navigation-bar", {
    template: { require: "text!components/apply-now/navigation-bar/navigation-bar-component.html" },
    viewModel: { require: "components/apply-now/navigation-bar/navigation-bar-viewmodel" }
  });
});
