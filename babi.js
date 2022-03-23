 <PropertyGroup>
    <Description>CRUD for Dapper</Description>
    <Copyright>2015 © Serge K</Copyright>
    <VersionPrefix>1.19.1</VersionPrefix>
    <VersionPrefix>1.20.0</VersionPrefix>
    <Authors>Serge K and Contributors</Authors>
    <TargetFrameworks Condition=" '$(OS)' == 'Windows_NT' ">net461;netstandard2.0;net5.0</TargetFrameworks>
    <TargetFrameworks Condition=" '$(OS)' != 'Windows_NT' ">netstandard2.0;net5.0</TargetFrameworks>
    <TargetFrameworks Condition=" '$(OS)' == 'Windows_NT' ">net461;netstandard2.0;net5.0;net6.0</TargetFrameworks>
    <TargetFrameworks Condition=" '$(OS)' != 'Windows_NT' ">netstandard2.0;net5.0;net6.0</TargetFrameworks>
    <TreatWarningsAsErrors>true</TreatWarningsAsErrors>
    <GenerateDocumentationFile>true</GenerateDocumentationFile>
    <PackageId>MicroOrm.Dapper.Repositories</PackageId>
@@ -27,7 +27,7 @@
    </None>
  </ItemGroup>
  <ItemGroup>
    <PackageReference Include="Dapper" Version="2.0.90" />
    <PackageReference Include="Dapper" Version="2.0.123" />
    <PackageReference Include="Microsoft.SourceLink.GitHub" Version="1.0.0" PrivateAssets="All" />
  </ItemGroup>
  <ItemGroup Condition=" '$(TargetFramework)' == 'net461' ">
