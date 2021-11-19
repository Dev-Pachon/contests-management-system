
async function findUser(prisma, email){
	return await prisma.credencial.findUnique({
		where: {
			codigo_credencial_correo: {
				codigo_credencial: 'RPC',
				correo: email,
			},
		},

	})
}

async function getUserRole(prisma, email){
	return await prisma.usuario.findUnique({
		where: {
			correo: email,
		},
	}).rol()
}

module.exports.findUser = findUser;

module.exports.getUserRole = getUserRole;

