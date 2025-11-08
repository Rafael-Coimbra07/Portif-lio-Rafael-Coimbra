const botaoTema = document.getElementById('botaoTema');
        const body = document.body;
        const temaAtual = localStorage.getItem('tema') || 'escuro';
        
        if (temaAtual === 'claro') {
            body.classList.add('modo-claro');
            botaoTema.textContent = '☀️';
        }

        botaoTema.addEventListener('click', () => {
            body.classList.toggle('modo-claro');
            if (body.classList.contains('modo-claro')) {
                botaoTema.textContent = '☀️';
                localStorage.setItem('tema', 'claro');
            } else {
                botaoTema.textContent = '🌙';
                localStorage.setItem('tema', 'escuro');
            }
        });

        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        const projetos = [
            {
                titulo: 'Gestão de Banco de Dados', 
                descricao: 'Sistema completo de otimização e administração de BD MySQL com monitoramento em tempo real.'
            },
            {
                titulo: 'Infraestrutura de Rede', 
                descricao: 'Implementação de rede corporativa segura com virtualização e alta disponibilidade.'
            },
            {
                titulo: 'Sistema de Segurança', 
                descricao: 'Arquitetura Zero Trust com autenticação multi-fator e controle de acesso granular.'
            }
        ];

        function abrirModal(indice) {
            document.getElementById('tituloModal').textContent = projetos[indice].titulo;
            document.getElementById('descricaoModal').textContent = projetos[indice].descricao;
            document.getElementById('modalProjeto').classList.add('ativo');
        }

        function fecharModal() {
            document.getElementById('modalProjeto').classList.remove('ativo');
        }

        document.getElementById('telefone').addEventListener('input', function(e) {
            let valor = e.target.value.replace(/\D/g, '');
            if (valor.length <= 11) {
                valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
                valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
            }
            e.target.value = valor;
        });

        document.getElementById('formularioContato').addEventListener('submit', function(e) {
            e.preventDefault();
            let valido = true;
            
            document.querySelectorAll('.grupo-formulario').forEach(grupo => {
                grupo.classList.remove('erro');
            });
            
            const nome = document.getElementById('nome').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            
            if (nome.length < 3) {
                document.getElementById('nome').parentElement.classList.add('erro');
                valido = false;
            }
            
            if (telefone.replace(/\D/g, '').length < 10) {
                document.getElementById('telefone').parentElement.classList.add('erro');
                valido = false;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                document.getElementById('email').parentElement.classList.add('erro');
                valido = false;
            }
            
            if (mensagem.length < 10) {
                document.getElementById('mensagem').parentElement.classList.add('erro');
                valido = false;
            }
            
            if (valido) {
                document.getElementById('mensagemSucesso').style.display = 'block';
                this.reset();
                setTimeout(() => {
                    document.getElementById('mensagemSucesso').style.display = 'none';
                }, 3000);
            }
        });

        window.addEventListener('scroll', () => {
            const hero = document.querySelector('.hero');
            const rolagemVertical = window.pageYOffset;
            hero.style.transform = `translateY(${rolagemVertical * 0.5}px)`;
        });