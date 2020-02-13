"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the fantabulous ${chalk.magentaBright("lit-element-scaffolding")} generator!`)
    );

    const prompts = [
      {
        type: "list",
        name: "elementType",
        message: "Select the type of element you need:",
        choices: ["Single Element", "Element with Router"],
        default: "Single Element"
      },
      {
        type: "input",
        name: "elementName",
        message: "What would you like your element to be called?",
        default: "my-element"
      },
      {
        type: "confirm",
        name: "installDep",
        message: "Would you like to install dependencies now?",
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const elementName = this.props.elementName;
    const elementType = this.props.elementType;
    const fromSingleElement = "single_element";
    const fromRouterElement = "router_element";

    if (elementType === "Single Element") {
      this.fs.copyTpl(
        `${this.templatePath(fromSingleElement)}/**/!(_)*`,
        this.destinationPath(),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath(`${fromSingleElement}/src/_element.js`),
        this.destinationPath(`src/${elementName}.js`),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath(`${fromSingleElement}/test/_test.js`),
        this.destinationPath(`test/${elementName}.test.js`),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath(`${fromSingleElement}/.storybook`),
        this.destinationPath(".storybook"),
        this.props
      );
    }

    if (elementType === "Element with Router") {
      this.fs.copyTpl(
        `${this.templatePath(fromRouterElement)}/**/!(_)*`,
        this.destinationPath(),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath(`${fromRouterElement}/src/_element.js`),
        this.destinationPath(`src/${elementName}.js`),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath(`${fromRouterElement}/test/_test.js`),
        this.destinationPath(`test/${elementName}.test.js`),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath(`${fromRouterElement}/.storybook`),
        this.destinationPath(".storybook"),
        this.props
      );
    }
  }

  install() {
    const installDep = this.props.installDep;
    if (installDep) {
      this.installDependencies();
    }
  }
};
