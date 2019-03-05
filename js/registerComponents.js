define(["external/knockout-3.5.0"], function(ko) {
  ko.components.register("main", {
    template: { require: "external/text!components/main/component.html" }
  });
  ko.components.register("apply-now", {
    template: { require: "external/text!components/apply-now/component.html" },
    viewModel: { require: "components/apply-now/component" }
  });
  ko.components.register("apply-now-basic-info", {
    template: { require: "external/text!components/apply-now/basic-info/component.html" },
    viewModel: { require: "components/apply-now/basic-info/component" }
  });
  ko.components.register("apply-now-admission", {
    template: { require: "external/text!components/apply-now/admission/component.html" },
    viewModel: { require: "components/apply-now/admission/component" }
  });
  ko.components.register("apply-now-highschool-info", {
    template: { require: "external/text!components/apply-now/highschool-info/component.html" },
    viewModel: { require: "components/apply-now/highschool-info/component" }
  });
  ko.components.register("apply-now-navigation-bar", {
    template: { require: "external/text!components/apply-now/navigation-bar/component.html" },
    viewModel: { require: "components/apply-now/component" }
  });
});
