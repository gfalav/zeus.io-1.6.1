Meteor.methods({
	contratosNew: function(doc) {
		if (this.userId) {
			if (doc.tipoContrato == "SE Edesal") {
				check(doc, EdesalSchema);
				doc.fAlta = new Date();
				doc.fUM = new Date();
				doc.fBaja = new Date();
				doc.usuario = this.userId;
				var contrato = Contratos.insert(doc);			
			}
		}
	},

	contratosUpdate: function(doc) {
		if (this.userId) {
			if (doc.tipoContrato == "SE Edesal") {
				check(doc, EdesalSchema);
				doc.fUM = new Date();
				doc.usuario = this.userId;
				var contrato = Contratos.update(doc._id, {$set: doc} );
			}
		}
	}

})