import _ from 'lodash'

const mahasiswa = [
    {nama: 'Feri Irawansyah', email: 'feryirawansyah@gmail.com', jurusan: 'Teknik Informatika'},
    {nama: 'Dede Sukron', email: 'sukrondede@gmail.com', jurusan: 'Teknik Kedokteran'},
    {nama: 'Erik Wijayanto', email: 'wijayanto@gmail.com', jurusan: 'Akuntansi'},
]

const mhs = _.find(mahasiswa, {nama: 'Dede Sukron'});
console.log(mhs)