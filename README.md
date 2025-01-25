## APi de contatos

##### Objetivo
Api feita para testar o fastify

### resumo
Api de agenda para cadastrar usuario e seus contatos

### Endpoints

- criar usuario
- listar contatos do usuario
- cadastrar contato para o usuario
- atualizar um contato do usuario
- deletar um contato do usuario

## Para rodar a API
**_Node version_** _18.16.1_
```bash

npm install
npx migrate prisma
npm run dev
```

## Requests
### users

```toml
name = 'Create user'
method = 'POST'
url = '{{globals.baseUrl}}/users'
sortWeight = 1000000
id = '8ab8844a-11aa-4b4e-a477-df93c829128c'

[body]
type = 'JSON'
raw = '''
{
  name: "antonio",
  email: "antonio@antoni.com"
}'''
```

#
### Contacts

**_Create Contact_**
```toml
name = 'Create Contact'
method = 'POST'
url = '{{globals.baseUrl}}/contacts'
sortWeight = 1000000
id = 'e499e563-deec-4b54-ac98-fef60794d403'

[[headers]]
key = 'email'
value = 'marco@marco.com'

[body]
type = 'JSON'
raw = '''
{
  name: "Ana Laura",
  "email": "ana@teste.com",
  "phone": "17 9999 0000"
}'''
```

**_list contacts_**
```toml
name = 'list contacts'
method = 'GET'
url = '{{globals.baseUrl}}/contacts'
sortWeight = 2000000
id = '05cc8846-ac7c-4cde-ae87-ef9dffed676d'

[[headers]]
key = 'email'
value = 'marco@marco.com'

[body]
type = 'JSON'
raw = '''
{
  name: "Antonio",
  "email": "antonio@teste.com",
  "phone": "17 9999 9999"
}'''
```

**_Update Contact_**
```toml
name = 'Update Contact'
method = 'PUT'
url = '{{globals.baseUrl}}/contacts/16a1f953-e24f-42de-8791-1e7b106ebb3c'
sortWeight = 3000000
id = 'ce2ae1db-22fe-429d-99e5-58db06bcf3a6'

[[headers]]
key = 'email'
value = 'marco@marco.com'

[body]
type = 'JSON'
raw = '''
{
  "name": "Ana Beatriz",
  "email": "ana@beatriz.com",
  "phone": "17 97777 0000"
}'''
```

_**Delete Contact**_
```toml
name = 'Delete Contact'
method = 'DELETE'
url = '{{globals.baseUrl}}/contacts/6244ae5d-79bb-4f44-900e-56b46755b3ca'
sortWeight = 4000000
id = '6614876c-29bc-47df-a281-348f84823dc5'

[[headers]]
key = 'email'
value = 'marco@marco.com'
```

