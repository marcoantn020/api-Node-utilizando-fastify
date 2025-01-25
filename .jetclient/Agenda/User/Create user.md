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
