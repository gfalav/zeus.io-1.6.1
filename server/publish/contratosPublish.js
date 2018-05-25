Meteor.publish('contratosPublish', function(cuentaId, contratoId) {
	if (contratoId) {
		return Contratos.find({"_id": contratoId});
	} else {
		return Contratos.find({"cuentaId": cuentaId})
	}
})