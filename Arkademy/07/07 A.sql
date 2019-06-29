CREATE TABLE IF NOT EXISTS `nama` (
    `id` int(11) NOT NULL,
    `name` varchar(25) NOT NULL,
    `id_hobby` int(11) NOT NULL,
    `id_category` int(11) NOT NULL)

INSERT INTO `nama` (`id`, `name`, `id_hobby`,`id_category`) VALUES
  (1, 'Sonie', 1,1),
  (2, 'Isgie', 2,2);

CREATE TABLE IF NOT EXISTS `hobi` (
    `id` int(11) NOT NULL,
    `name` varchar(25) NOT NULL,
    `id_category` int(11) NOT NULL)

INSERT INTO `hobi` (`id`, `name`,`id_category`) VALUES
  (1, 'Mobile Legends',1),
  (2, 'Futsal', 2);

CREATE TABLE IF NOT EXISTS `kategori` (
    `id` int(11) NOT NULL,
    `name` varchar(25) NOT NULL)

INSERT INTO `kategori` (`id`, `name`) VALUES
  (1, 'Game'),
  (2, 'Olahraga');

SELECT 'name' FROM 'nama','hobi','kategori';