Meteor.methods({
	edesalsNew: function(doc) {
		if (this.userId) {
			check(doc, EdesalSchema);
			doc.fAlta = new Date();
			doc.fUM = new Date();
			doc.fBaja = new Date();
			doc.usuario = this.userId;
			var contrato = Contratos.insert({"cuentaId": doc.contratoId, "tipoContrato": "Edesal"});
			doc.contratoId = contrato;
			var edesal = Edesals.insert(doc);
			return edesal;
		}
	},

	edesalsUpdate: function(doc) {
		if (this.userId) {
			check(doc, EdesalSchema);
			doc.fUM = new Date();
			doc.usuario = this.userId;
			var edesal = Edesals.update(doc._id, {$set: doc} );
			return edesal;
		}
	}

})