
async function findUser(prisma){
	return await prisma.usuario.findUnique({
		where: {
			username: 'iamTheBest',
		},
	})
}

module.exports.findUser = findUser;

