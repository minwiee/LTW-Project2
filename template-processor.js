"use strict";

// Định nghĩa lớp TemplateProcessor
function TemplateProcessor(template) {
    this.template = template;
}

TemplateProcessor.prototype.fillIn = function(dictionary) {

        return this.template.replace(/{{([^}]+)}}/g, function(match, key) {

            return dictionary[key] || '';
        });
};

