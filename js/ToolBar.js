var ToolBarView = function() {
	var self = this;
	
	$("#toolbar button").button();
	$("#toolbar .buttonset").buttonset();
	
	$("#button-delete").click(function() {
		if (self.deleteButtonClicked) {
			self.deleteButtonClicked();
		}
	});
	
	$("#button-undo").button("disable");
	$("#button-redo").button("disable");

	$("#button-new").click(function() {
		if (self.newButtonClicked) {
			self.newButtonClicked();
		}
	});
	
	$("#button-open").click(function() {
		if (self.openButtonClicked) {
			self.openButtonClicked();
		}
	});

	
	$("#button-save").button("option", "icons", {
		primary : "ui-icon-disk"
	});
	
	$("#button-save").click(function() {
		if (self.saveButtonClicked) {
			self.saveButtonClicked();
		}
	});
	
	$("#button-close").button("option", "icons", {
		primary : "ui-icon-circle-close"
	});
	
	$("#button-draw").button();
};


var ToolBarPresenter = function(eventBus, view) {
	view.deleteButtonClicked = function() {
		eventBus.publish("DeleteSelectedNodeEvent");
	};
	
	view.saveButtonClicked = function() {
		eventBus.publish("SaveDocumentEvent");
	};
	
	view.openButtonClicked = function() {
		eventBus.publish("OpenDocumentEvent");
	};
	
	view.newButtonClicked = function() {
		eventBus.publish("NewDocumentEvent");
	};
};