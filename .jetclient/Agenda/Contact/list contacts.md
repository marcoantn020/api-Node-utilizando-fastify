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
