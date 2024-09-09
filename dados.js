// Declaração da váriavel que contém uma lista de objetos com os dados dos veiculos
let bandasDeMetal = [
    {
        titulo: "Metallica",
        descricao: "Uma das bandas de thrash metal mais influentes do mundo, formada em Los Angeles em 1981. Conhecida por seus shows energéticos e hinos como 'Master of Puppets' e 'Enter Sandman', o Metallica revolucionou o heavy metal com riffs poderosos e letras que abordam temas como a sociedade, a guerra e a morte. Álbuns como 'Master of Puppets' e 'And Justice for All' são considerados clássicos do gênero.",
        link: "https://pt.wikipedia.org/wiki/Metallica",
        tags: "thrash metal heavy metal rock energia icônica",
        musicos: "James Hetfield (guitarra, vocal), Kirk Hammett (guitarra solo), Robert Trujillo (baixo), Lars Ulrich (bateria)"
    },
    {
        titulo: "Iron Maiden",
        descricao: "Banda britânica de heavy metal formada em 1975, reconhecida por suas letras épicas, melodias cativantes e a icônica mascote Eddie. Com uma discografia extensa e variada, o Iron Maiden é um dos pilares do heavy metal tradicional. Álbuns como 'The Number of the Beast' e 'Powerslave' são considerados marcos do gênero.",
        link: "https://pt.wikipedia.org/wiki/Iron Maiden",
        tags: "heavy metal rock épico Eddie britânica",
        musicos: "Bruce Dickinson (vocal), Dave Murray (guitarra), Adrian Smith (guitarra), Steve Harris (baixo), Nicko McBrain (bateria)"
    },
    {
        titulo: "Slayer",
        descricao: "Pioneiros do thrash metal, conhecidos por suas letras violentas e shows intensos. Com uma sonoridade agressiva e rápida, o Slayer influenciou diversas bandas de metal extremo. Álbuns como 'Reign in Blood' e 'South of Heaven' são considerados clássicos do gênero.",
        link: "https://pt.wikipedia.org/wiki/Slayer",
        tags: "thrash metal heavy metal violenta intensa pioneira",
        musicos: "Tom Araya (vocal, baixo), Kerry King (guitarra), Jeff Hanneman (guitarra - falecido), Paul Bostaph (bateria)" // Formação clássica
    },
    {
        titulo: "Rammstein",
        descricao: "Banda alemã de industrial metal conhecida por seus shows pirotécnicos e letras provocativas. Com uma estética visual marcante e uma sonoridade pesada e eletrônica, o Rammstein se tornou um dos nomes mais importantes do metal industrial. Álbuns como 'Herzeleid' e 'Sehnsucht' são considerados marcos da banda.",
        link: "https://pt.wikipedia.org/wiki/Rammstein",
        tags: "industrial metal alemã pirotecnia provocativa dark",
        musicos: "Till Lindemann (vocal), Paul Landers (guitarra), Richard Z. Kruspe (guitarra), Oliver Riedel (baixo), Christoph Schneider (bateria)"
    },
    {
        titulo: "Sepultura",
        descricao: "Pioneiros do thrash metal brasileiro, com influências de música indígena e ritmos brasileiros. O Sepultura incorporou elementos da cultura brasileira em sua música, criando um som único e inovador. Álbuns como 'Arise' e 'Roots' são considerados clássicos do metal brasileiro.",
        link: "https://pt.wikipedia.org/wiki/Sepultura",
        tags: "thrash metal brasileira indígena ritmos brasileiros pioneira",
        musicos: "Max Cavalera (vocal, guitarra - ex-membro), Andreas Kisser (guitarra), Paulo Jr. (baixo), Igor Cavalera (bateria - ex-membro)"
    },
    {
        titulo: "Nightwish",
        descricao: "Banda finlandesa de metal sinfônico conhecida por suas músicas épicas, vocais líricos e a combinação de elementos sinfônicos e heavy metal. Com a vocalista Tarja Turunen em sua formação original, o Nightwish conquistou fama internacional com álbuns como 'Oceanborn' e 'Century Child'. Após a saída de Tarja, a banda continuou a fazer sucesso com novas vocalistas, mantendo sua sonoridade característica.",
        link: "https://pt.wikipedia.org/wiki/Nightwish",
        tags: "metal sinfônico finlandesa épica lírica orquestra",
        musicos: "Floor Jansen (vocal), Emppu Vuorinen (guitarra), Tuomas Holopainen (teclado), Marco Hietala (baixo, vocal - ex-membro), Kai Hahto (bateria)"
    },
    {
        titulo: "Arch Enemy",
        descricao: "Banda sueca de melodic death metal com uma vocalista feminina poderosa e uma sonoridade agressiva e melódica ao mesmo tempo. O Arch Enemy se destaca por suas letras sombrias e riffs rápidos. Álbuns como 'Wages of Sin' e 'Doomsday' são considerados clássicos do gênero.",
        link: "https://pt.wikipedia.org/wiki/Arch_Enemy",
        tags: "melodic death metal sueca poderosa agressiva melódica",
        musicos: "Alissa White-Gluz (vocal), Michael Amott (guitarra), Jeff Loomis (guitarra), Sharlee D'Angelo (baixo), Daniel Erlandsson (bateria)"
    },
    {
        titulo: "Megadeth",
        descricao: "Uma das bandas fundadoras do thrash metal, conhecida por seus solos técnicos e letras satíricas e políticas. Liderada por Dave Mustaine, o Megadeth é um dos pilares do thrash metal, com álbuns como 'Peace Sells...But Who's Buying?' e 'Rust in Peace' sendo considerados clássicos do gênero.",
        link: "https://pt.wikipedia.org/wiki/Megadeth",
        tags: "thrash metal técnica satírica política fundadora",
        musicos: "Dave Mustaine (guitarra, vocal), Marty Friedman (guitarra - ex-membro), David Ellefson (baixo - ex-membro), Nick Menza (bateria - falecido)"
    },
    {
        titulo: "Pantera",
        descricao: "Pioneiros do groove metal, conhecidos por seus riffs pesados e letras agressivas. Com uma sonoridade crua e intensa, o Pantera influenciou diversas bandas de metal, especialmente no gênero groove metal. Álbuns como 'Vulgar Display of Power' e 'Far Beyond Driven' são considerados marcos do gênero.",
        link: "https://pt.wikipedia.org/wiki/Pantera",
        tags: "groove metal heavy metal agressivo poderoso",
        musicos: "Phil Anselmo (vocal), Dimebag Darrell (guitarra - falecido), Vinnie Paul (bateria - falecido), Rex Brown (baixo)"
    },
    {
        titulo: "Opeth",
        descricao: "Banda sueca de metal progressivo conhecida por suas músicas longas e complexas, com influências de jazz e folk. O Opeth se destaca por suas mudanças de tempo e clima, e por suas letras introspectivas. Álbuns como 'Blackwater Park' e 'Ghost Reveries' são considerados clássicos do metal progressivo.",
        link: "https://pt.wikipedia.org/wiki/Opeth",
        tags: "metal progressivo sueca complexo jazz folk",
        musicos: "Mikael Åkerfeldt (guitarra, vocal), Fredrik Åkesson (guitarra), Martin Méndez (baixo), Martin Axenrot (bateria)"
    },
    {
        titulo: "System of a Down",
        descricao: "Banda americana de metal alternativo formada em Los Angeles em 1995, conhecida por suas letras politicamente engajadas, sonoridade única e influências armênias. A banda combina elementos do metal, rock alternativo e música tradicional armênia, criando um som distintivo que aborda temas como a guerra, a injustiça social e a identidade cultural. Com letras muitas vezes complexas e intrincadas, o System of a Down se tornou um dos nomes mais importantes do metal alternativo, conquistando uma legião de fãs ao redor do mundo. Álbuns como 'Toxicity' e 'Hypnotize' são considerados clássicos do gênero.",
        link: "https://pt.wikipedia.org/wiki/System_of_a_Down",
        tags: "metal alternativo americano político experimental armênio",
        musicos: "Serj Tankian (vocal, teclado), Daron Malakian (guitarra, vocal), Shavo Odadjian (baixo), John Dolmayan (bateria)"
    }
]