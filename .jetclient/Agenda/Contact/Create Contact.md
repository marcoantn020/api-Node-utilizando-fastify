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
